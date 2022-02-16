def is_prime(number, holder=-1):
    if number <= 2:
        return True
    else:
        if holder < 0:
            holder = number

        return is_prime(number - 1, holder) and (holder % (number - 1) != 0)


if __name__ == "__main__":
    primes = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
    ]
    for index in range(2, 72):
        print(f"{index}: {is_prime(index)}")
        assert is_prime(index) == (index in primes)
