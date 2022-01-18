import math


def calculatePainting(area):
    litersRequired = area / 3
    bucketsRequired = math.ceil(litersRequired / 18)

    return bucketsRequired, bucketsRequired * 80


if __name__ == "__main__":
    print(calculatePainting(3))
    print(calculatePainting(55))
    print(calculatePainting(550))
