export default function handler(req, res) {
  res.status(200).json([
    { name: "Demo Product 1", price: 10 },
    { name: "Demo Product 2", price: 20 }
  ]);
}
