import statistics


class Estatistica:
    @classmethod
    def average(cls, numbers):
        return statistics.mean(numbers)

    @classmethod
    def median(cls, numbers):
        return statistics.median(numbers)

    @classmethod
    def mode(cls, numbers):
        return statistics.mode(numbers)


if __name__ == "__main__":
    first_numbers = [5, 10, 50]
    second_numbers = [5, 10, 50, 8, 13, 235, 23, 5]

    print(f"First average: {Estatistica.average(first_numbers)}")
    print(f"Second average: {Estatistica.average(second_numbers)}")

    print(f"First median: {Estatistica.median(first_numbers)}")
    print(f"Second median: {Estatistica.median(second_numbers)}")

    print(f"First mode: {Estatistica.mode(first_numbers)}")
    print(f"Second mode: {Estatistica.mode(second_numbers)}")
