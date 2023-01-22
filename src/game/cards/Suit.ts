export enum Suit {
  HEARTS = "HEARTS",
  SPADES = "SPADES",
  DIAMONDS = "DIAMONDS",
  CLUBS = "CLUBS",
}

export const suits: Suit[] = Object.values(Suit);

export const suitsUnicode: Record<Suit, string> = {
  [Suit.SPADES]: "\u2660",
  [Suit.HEARTS]: "\u2665",
  [Suit.DIAMONDS]: "\u2666",
  [Suit.CLUBS]: "\u2663",
};
