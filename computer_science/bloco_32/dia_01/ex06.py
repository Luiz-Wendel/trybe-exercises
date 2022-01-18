def getTypeOfTriangle(firstSide, secondSide, thirdSide):
    isTriangle = (
        firstSide + secondSide > thirdSide
        and secondSide + thirdSide > firstSide
        and firstSide + thirdSide > secondSide
    )

    if not isTriangle:
        return "Not a triangle"
    elif firstSide == secondSide == thirdSide:
        return "Equilateral triangle"
    elif (
        firstSide == secondSide
        or secondSide == thirdSide
        or firstSide == thirdSide
    ):
        return "Isosceles triangle"
    else:
        return "Scalene triangle"


if __name__ == "__main__":
    print(getTypeOfTriangle(18, 22, 40))
    print(getTypeOfTriangle(1, 1, 1))
    print(getTypeOfTriangle(203, 203, 140))
    print(getTypeOfTriangle(131, 148, 203))
