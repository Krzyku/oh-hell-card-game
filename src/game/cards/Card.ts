import { Rank, ranksMap } from "./Ranks";
import { Suit, suitsUnicode } from "./Suit";

export class Card {
  constructor(readonly rank: Rank, readonly suit: Suit) {}

  get value(): number {
    return ranksMap[this.rank];
  }

  get unicode(): string {
    return suitsUnicode[this.suit];
  }

  equals(other: Card): boolean {
    return other.rank === this.rank && other.suit === this.suit;
  }

  toString() {
    return `[${this.rank}${this.unicode}]`;
  }

  static compare(a: Card, b: Card): number {
    return a.value - b.value;
  }
}
