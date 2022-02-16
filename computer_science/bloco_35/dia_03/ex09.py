import requests


def get_quotes():
    page = 1
    has_next = True
    quotes = list()

    while has_next:
        URL = f"http://quotes.toscrape.com/api/quotes?page={page}"

        response = requests.get(URL)
        content = response.json()

        quotes.extend(content["quotes"])

        has_next = content["has_next"]
        page += 1

    for quote in quotes:
        print(quote)

    print(f"Found {len(quotes)} quotes")


if __name__ == "__main__":
    get_quotes()
