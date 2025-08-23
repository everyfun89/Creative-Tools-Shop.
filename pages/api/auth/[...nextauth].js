// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectMongo();
        const user = await User.findOne({ email: credentials.email.toLowerCase() });
        if (!user) throw new Error("No user found");
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid credentials");
        return { id: user._id.toString(), name: user.name || user.email, email: user.email };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});
