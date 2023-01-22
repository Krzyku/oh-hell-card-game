import { Card } from "./Card";
import { Rank } from "./Ranks";
import { Suit } from "./Suit";

describe("Card", () => {
  it.each<[Rank, number]>([
    [2, 2],
    ["A", 14],
  ])("maps %s rank to value %d", (rank, value) => {
    const card = new Card(rank, Suit.CLUBS);

    expect(card.value).toBe(value);
  });

  describe("compare", () => {
    it("returns 0 when ranks are the same", () => {
      const a = Object.freeze(new Card(7, Suit.CLUBS));
      const b = Object.freeze(new Card(7, Suit.DIAMONDS));

      const result = Card.compare(a, b);

      expect(result).toBe(0);
    });

    it("returns a positive number when comparing (stronger, weaker) and negative otherwise", () => {
      const stronger = new Card("J", Suit.HEARTS);
      const weaker = new Card(10, Suit.CLUBS);

      const positive = Card.compare(stronger, weaker);
      expect(positive).toBeGreaterThan(0);

      const negative = Card.compare(weaker, stronger);
      expect(negative).toBeLessThan(0);
    });
  });
});
