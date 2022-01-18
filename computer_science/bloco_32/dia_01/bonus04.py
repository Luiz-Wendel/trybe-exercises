def get_gas_price(liters, type):
    prices = {"A": (1.9, 0.97, 0.95), "G": (2.5, 0.96, 0.94)}
    if liters > 20:
        return liters * prices[type][0] * prices[type][2]
    else:
        return liters * prices[type][0] * prices[type][1]


if __name__ == "__main__":
    print(get_gas_price(10, "A"))
    print(get_gas_price(10, "G"))
    print(get_gas_price(40, "A"))
    print(get_gas_price(40, "G"))
