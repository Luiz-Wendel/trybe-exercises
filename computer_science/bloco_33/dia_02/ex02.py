import random
import json


words = []
with open("computer_science/bloco_33/dia_02/words.json", "r") as file:
    words = json.load(file)


def scramble_word(word):
    return "".join(random.sample(word, len(word)))


def get_random(list):
    return random.choice(list)


def word_game():
    tries = 3
    random_word = get_random(words)
    scrambled_word = scramble_word(random_word)

    print(f"Scrambled word: {scrambled_word}")

    while tries:
        user_word = input("Your guess:")
        if user_word == random_word:
            print("Correct!")
            break
        else:
            if tries == 1:
                print("Incorrect, play again!")
            else:
                print("Incorrect, try again!")
        tries -= 1


if __name__ == "__main__":
    word_game()
