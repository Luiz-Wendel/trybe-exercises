schema = [
    ("0", "0"),
    ("1", "1"),
    ("-", "-"),
    ("ABC", "2"),
    ("DEF", "3"),
    ("GHI", "4"),
    ("JKL", "5"),
    ("MNO", "6"),
    ("PQRS", "7"),
    ("TUV", "8"),
    ("WXYZ", "9"),
]
valid_chars = "".join([chars for chars, _ in schema])


def decode(encoded):
    decoded = ""

    for letter in encoded:
        if letter not in valid_chars:
            raise (TypeError("Invalid input"))
        for digits, value in schema:
            if letter in digits:
                decoded += value
                break

    return decoded


if __name__ == "__main__":
    print(decode("1-HOME-SWEET-HOME"))
    print(decode("MY-MISERABLE-JOB"))
