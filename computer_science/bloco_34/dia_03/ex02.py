class CardDeckIterable:
    def __init__(self, cards):
        self.cards = cards

    def __iter__(self):
        return CardDeckIterator(self.cards)


class CardDeckIterator:
    def __init__(self, cards):
        self.cards = cards
        self.current_card = 0

    def __next__(self):
        try:
            card = self.cards[self.current_card]

            self.current_card += 1
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

    def __len__(self):
        return len(self._cards)

    def get_cards(self):
        return self._cards


if __name__ == "__main__":
    for card in CardDeckIterable(CardDeck().get_cards()):
        print(card)
