import requests


def make_request():
    URL = "https://api.github.com/users"

    response = requests.get(URL)
    users = response.json()

    for user in users:
        print(f"{user['login']} {user['url']}")


if __name__ == "__main__":
    make_request()
