import { Card } from "./Card";
import { Deck, NotEnoughCardsError } from "./Deck";
import { suits } from "./Suit";

const STANDARD_DECK_SIZE = 52;

describe("Deck", () => {
  it(`creates standard deck with ${STANDARD_DECK_SIZE} cards`, () => {
    const deck = Deck.standard();
    expect(deck.size).toBe(STANDARD_DECK_SIZE);
  });

  describe("draw", () => {
    it("draws one card", () => {
      const deck = Deck.standard();

      const result = deck.draw();

      expect(result).toBeInstanceOf(Card);
      expect(deck.size).toBe(STANDARD_DECK_SIZE - 1);
    });

    it.each<number>([0, 1, 4, 10])("draws %d cards", (count) => {
      const deck = Deck.standard();

      const result = deck.draw(count);

      expect(result).toHaveLength(count);
      expect(deck.size).toBe(STANDARD_DECK_SIZE - count);
    });

    it.each([undefined, 4])(
      "throws error when not enough cards in deck",
      (count) => {
        const deck = new Deck([]);
        const draw = () => (count ? deck.draw(count) : deck.draw());
        expect(draw).toThrowError(NotEnoughCardsError);
      }
    );
  });

  it("sets trump suit", () => {
    const deck = Deck.standard();
    expect(deck.trumpSuit).toBeUndefined();

    const trump = deck.pickTrump();
    expect(suits).toContain(trump);
    expect(deck.size).toBe(STANDARD_DECK_SIZE - 1);
  });
});
