def getSum(number):
    if number > 1:
        return number + getSum(number - 1)
    else:
        return 1


if __name__ == "__main__":
    print(getSum(5))
    print(getSum(4))
    print(getSum(3))
