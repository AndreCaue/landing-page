import React from "react";

export function DeckCard({ id }: { id: string }) {
  const suits = {
    spades: { symbol: "♠", color: "black" },
    hearts: { symbol: "♥", color: "red" },
    diamonds: { symbol: "♦", color: "red" },
    clubs: { symbol: "♣", color: "black" },
  };

  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const deck = [];

  for (const suitName of Object.keys(suits) as Array<keyof typeof suits>) {
    for (const rank of ranks) {
      deck.push({
        id: `${rank}-${suitName}`,
        rank,
        suit: suits[suitName].symbol,
        color: suits[suitName].color,
      });
    }
  }

  const card = deck.find((c) => c.id === id);

  if (!card) return null;

  return (
    <svg viewBox="0 0 300 420" className="h-full w-full">
      <rect
        width="300"
        height="420"
        rx="20"
        fill="white"
        stroke="black"
        strokeWidth="4"
      />

      <text x="25" y="60" fontFamily="Arial" fontSize="60" fill={card.color}>
        {card.rank}
      </text>
      <text x="25" y="120" fontFamily="Arial" fontSize="80" fill={card.color}>
        {card.suit}
      </text>

      <g transform="translate(300,420) rotate(180)">
        <text x="25" y="60" fontFamily="Arial" fontSize="60" fill={card.color}>
          {card.rank}
        </text>
        <text x="25" y="120" fontFamily="Arial" fontSize="80" fill={card.color}>
          {card.suit}
        </text>
      </g>

      <text
        x="150"
        y="230"
        fontFamily="Arial"
        fontSize="180"
        textAnchor="middle"
        fill={card.color}
      >
        {card.suit}
      </text>
    </svg>
  );
}
