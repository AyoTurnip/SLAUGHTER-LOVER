export default function handler(req, res) {
  const words = [
    "N WORD",
    "SLAUGHER",
    "DRONGO",
    "ARC",
    "TURNIP",
    "SANTA",
    "TWITTER",
    "TWITCH",
    "YOUTUBE",
    "BAJOV",
    "MONEY",
    "TRUMP",
    "KAMALA",
    "BIDEN",
    "NETANYAHU",
    "ISRAEL",
    "SENTENCE",
    "VERITY",
    "REDDIT",
    "BLUESKY",
    "SLUR",
    "MAN",
    "WOMAN",
    "MINATO AQUA",
  ];

  const word = words[Math.floor(Math.random() * words.length)];

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(`${word} LOVER ${word} LOVER ${word} LOVER ${word} LOVER ${word} LOVER ${word} LOVER ${word} LOVER ${word} LOVER`);
}
