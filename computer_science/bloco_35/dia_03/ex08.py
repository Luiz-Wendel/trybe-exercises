import os
import requests
from parsel import Selector


def get_flags():
    URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

    response = requests.get(URL)
    selector = Selector(text=response.text)

    flag_urls = selector.css("li.gallerybox a.image img::attr(src)").getall()

    folder = "flags"
    if not os.path.exists(folder):
        os.mkdir(folder)

    for flag_url in flag_urls:
        file_name = flag_url.split("/")[-1]
        file_path = os.path.join(folder, file_name)

        formatted_flag_url = "https:" + flag_url
        flag_binary = requests.get(formatted_flag_url).content

        with open(file_path, "wb") as file:
            file.write(flag_binary)


if __name__ == "__main__":
    get_flags()
