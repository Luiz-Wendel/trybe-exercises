from pymongo import MongoClient


def get_published_books_by_category():
    with MongoClient() as client:
        db = client.library

        """
Pymongo Aggregation Framework
Source: https://pymongo.readthedocs.io/en/stable/examples/aggregation.html
        """
        pipeline = [
            {"$match": {"status": "PUBLISH"}},
            {"$unwind": "$categories"},
            {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
        ]

        categories = db.books.aggregate(pipeline)

        for category in list(categories):
            print(f"{category['_id']} {category['count']}")


if __name__ == "__main__":
    get_published_books_by_category()
