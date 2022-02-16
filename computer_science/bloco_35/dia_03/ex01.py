import requests
from parsel import Selector


def make_request():
    URL = "https://httpbin.org/encoding/utf8"

    response = requests.get(URL)
    selector = Selector(text=response.text)

    print(selector.css("pre").get())


if __name__ == "__main__":
    make_request()
