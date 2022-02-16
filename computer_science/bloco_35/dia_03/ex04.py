import requests
from parsel import Selector


def make_request():
    BASE_URL = "http://books.toscrape.com/catalogue/"
    URL = f"{BASE_URL}the-grand-design_405/index.html"

    response = requests.get(URL)
    selector = Selector(text=response.text)

    title = selector.css("div.product_main > h1::text").get()
    price = selector.css("p.price_color::text").re_first("\d+.\d{2}")
    description = selector.css("#product_description ~ p::text").get()
    image_url = (
        BASE_URL + selector.css("#product_gallery img::attr(src)").get()
    )

    suffix = "...more"
    if description.endswith(suffix):
        description = description[: -len(suffix)]

    print(f"{title},{price},{description},{image_url}")


if __name__ == "__main__":
    make_request()
