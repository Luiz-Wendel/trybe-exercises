from ex01 import fizz_buzz_list_generator


def test_if_returns_fizz_when_divisible_by_three():
    result = fizz_buzz_list_generator(3)
    assert 3 not in result
    assert "Fizz" in result
    assert result == [1, 2, "Fizz"]


def test_if_returns_buzz_when_divisible_by_five():
    result = fizz_buzz_list_generator(5)
    assert 5 not in result
    assert "Buzz" in result
    assert result == [1, 2, "Fizz", 4, "Buzz"]


def test_if_returns_fizz_buzz_when_divisible_by_three_and_five():
    result = fizz_buzz_list_generator(15)
    assert 15 not in result
    assert "FizzBuzz" in result
    assert result == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]
