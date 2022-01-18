def getGasPrice(liters, type):
    prices = {"A": (1.9, 0.97, 0.95), "G": (2.5, 0.96, 0.94)}
    if liters > 20:
        return liters * prices[type][0] * prices[type][2]
    else:
        return liters * prices[type][0] * prices[type][1]


if __name__ == "__main__":
    print(getGasPrice(10, "A"))
    print(getGasPrice(10, "G"))
    print(getGasPrice(40, "A"))
    print(getGasPrice(40, "G"))
