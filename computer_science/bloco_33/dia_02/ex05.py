import json
import random


def get_pokemons():
    pokemons = set()

    with open("computer_science/bloco_33/dia_02/pokemons.json", "r") as file:
        for pokemon in json.loads(file.read())["results"]:
            pokemons.add(pokemon["name"])

    return list(pokemons)


def get_random(list):
    return random.choice(list)


def game():
    pokemons = get_pokemons()
    random_pokemon = get_random(pokemons)
    tries = len(random_pokemon)

    while tries > 0:
        if tries != len(random_pokemon):
            print(random_pokemon[: len(random_pokemon) - tries])

        user_pokemon = input("Who's that Pokémon?\n")

        if user_pokemon == random_pokemon:
            print(f"It's {random_pokemon}!")
            break

        if tries == 1:
            print(f"It's {random_pokemon}! Better luck next time!")
            break

        tries -= 1


if __name__ == "__main__":
    game()
