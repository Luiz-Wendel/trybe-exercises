def get_sum(number):
    if number > 1:
        return number + get_sum(number - 1)
    else:
        return 1


if __name__ == "__main__":
    print(get_sum(5))
    print(get_sum(4))
    print(get_sum(3))
