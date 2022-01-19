import json
import csv


def get_books():
    with open("computer_science/bloco_33/dia_02/books.json", "r") as file:
        return [json.loads(line) for line in file]


def get_book_count_by_category(books):
    categories_books = dict()

    for book in books:
        for category in book["categories"]:
            if categories_books.get(category):
                categories_books[category] += 1
            else:
                categories_books[category] = 1

    return categories_books


def get_categories_percentage(book_count_by_category, books_quantity):
    return {
        category: book_count / books_quantity
        for category, book_count in book_count_by_category.items()
    }


def write_csv(categories_percentage):
    with open("computer_science/bloco_33/dia_02/ex04.csv", "w") as file:
        writer = csv.writer(file)
        writer.writerow(["category", "percentage"])
        writer.writerows(categories_percentage.items())


def write_report():
    books = get_books()
    book_count_by_category = get_book_count_by_category(books)
    categories_percentage = get_categories_percentage(
        book_count_by_category, len(books)
    )
    write_csv(categories_percentage)


if __name__ == "__main__":
    write_report()
