export default async function handler(req, res) {
  const response = await fetch('https://animechan.vercel.app/api/random');
  const quote = await response.json();
  res.status(200).json({ name: quote })
}
