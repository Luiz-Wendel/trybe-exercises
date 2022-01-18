import math


def calculate_painting(area):
    liters_required = area / 3
    buckets_required = math.ceil(liters_required / 18)

    return buckets_required, buckets_required * 80


if __name__ == "__main__":
    print(calculate_painting(3))
    print(calculate_painting(55))
    print(calculate_painting(550))
