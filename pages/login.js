import { getProviders, signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#87d0fa] p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
      <div className="flex flex-col gap-4 w-64">
        {Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="px-4 py-2 bg-[#ffa8f4] text-white rounded-xl hover:bg-white hover:text-[#87d0fa] transition"
          >
            Sign in with {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
