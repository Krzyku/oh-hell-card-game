import { Card } from "./Card";
import { ranks } from "./Ranks";
import { Suit, suits } from "./Suit";

export class Deck {
  // TODO: replace Card[] with CardsSet that makes sure we have only unique cards
  constructor(private _cards: Card[], private _trumpSuit?: Suit) {}

  get size() {
    return this._cards.length;
  }

  get trumpSuit() {
    return this._trumpSuit;
  }

  draw(): Card;
  draw(count: number): Card[];
  draw(count?: number): Card[] | Card {
    const n = count ?? 1;
    if (n > this.size) {
      throw new NotEnoughCardsError();
    }

    return count === undefined
      ? (this._cards.shift() as Card)
      : this._cards.splice(0, count);
  }

  shuffle(): void {
    for (let i = this.size - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this._cards[i];
      this._cards[i] = this._cards[j];
      this._cards[j] = temp;
    }
  }

  pickTrump(): Suit {
    const { suit } = this.draw();
    this._trumpSuit = suit;
    return suit;
  }

  static standard(): Deck {
    const cards: Card[] = [];

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        cards.push(new Card(rank, suit));
      });
    });

    return new Deck(cards);
  }
}

export class NotEnoughCardsError extends Error {
  constructor() {
    super("Not enough cards remaining");
  }
}
