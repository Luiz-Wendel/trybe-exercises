from pymongo import MongoClient


def get_by_category(category):
    with MongoClient() as client:
        db = client.library
        for book in db.books.find({"categories": category}):
            print(book["title"])


if __name__ == "__main__":
    print("Books in Open Source:\n")
    get_by_category("Open Source")
    print("###################################")
    print("\nBooks in Java:\n")
    get_by_category("Java")
    print("###################################")
