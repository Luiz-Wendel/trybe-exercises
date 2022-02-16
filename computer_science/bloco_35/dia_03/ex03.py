import requests


def make_request():
    URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
    header = {"User-Agent": "Chrome/70.0.3538.77", "Accept": "text/html"}

    response = requests.get(URL, headers=header)

    assert "bot detected" not in response.text


if __name__ == "__main__":
    make_request()
