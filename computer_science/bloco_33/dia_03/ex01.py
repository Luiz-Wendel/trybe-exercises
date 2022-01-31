def fizz_buzz_list_generator(number):
    list = []
    for index in range(1, number + 1):
        if index % 15 == 0:
            list.append("FizzBuzz")
        elif index % 3 == 0:
            list.append("Fizz")
        elif index % 5 == 0:
            list.append("Buzz")
        else:
            list.append(index)
    return list


if __name__ == "__main__":
    print(fizz_buzz_list_generator(5))
    print(fizz_buzz_list_generator(15))
    print(fizz_buzz_list_generator(30))
