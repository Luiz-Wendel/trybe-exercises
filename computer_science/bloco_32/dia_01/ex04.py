def getBiggestName(names):
    largestName = ""
    for name in names:
        if len(name) > len(largestName):
            largestName = name
    return largestName


if __name__ == "__main__":
    print(
        getBiggestName(
            ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
        )
    )
