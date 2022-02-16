"""
Euclidean algorithm
Source: https://en.wikipedia.org/wiki/Euclidean_algorithm#:~:text=\
In%20mathematics%2C%20the%20Euclidean%20algorithm,them%20both%20without%20a%20remainder.
"""


def greatest_common_divisor(first_number, second_number):
    if second_number == 0:
        return first_number
    else:
        return greatest_common_divisor(
            second_number, first_number % second_number
        )
