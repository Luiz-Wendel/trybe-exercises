class CardDeckIterator:
    def __init__(self, cards, direction):
        self.cards = cards
        self.current_card = 0
        self.direction = direction

    def __next__(self):
        direction_dict = {
            "forward": {
                "index": self.current_card,
                "next": self.current_card + 1,
            },
            "reverse": {
                "index": self.current_card - 1,
                "next": self.current_card - 1,
            },
        }

        try:
            index = direction_dict[self.direction]["index"]

            card = self.cards[index]

            self.current_card = direction_dict[self.direction]["next"]
            return card
        except IndexError:
            raise StopIteration

    def __prev__(self):
        try:
            card = self.cards[self.current_card - 1]

            self.current_card -= 1
            return card
        except IndexError:
            raise StopIteration


class Card:
    def __init__(self, value, suite):
        self.value = value
        self.suite = suite

    def __repr__(self):
        return "<%s of %s>" % (self.value, self.suite)


class CardDeck:
    suite = "hearts diamonds spades clubs".split()
    values = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cards = [
            Card(value, suite) for suite in self.suite for value in self.values
        ]
        self.direction = "forward"

    def __len__(self):
        return len(self._cards)

    def __iter__(self):
        return CardDeckIterator(self._cards, self.direction)

    def __call__(self, direction):
        self.direction = direction
        return self


if __name__ == "__main__":
    card_deck = CardDeck()
    for card in card_deck("forward"):
        print(card)
    for card in card_deck("reverse"):
        print(card)
