class Estatistica:
    @classmethod
    def average(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def median(cls, numbers):
        sorted_numbers = sorted(numbers.copy())
        median_index = len(sorted_numbers) / 2

        if median_index.is_integer():
            return (
                sorted_numbers[int(median_index) - 1]
                + sorted_numbers[int(median_index)]
            ) / 2
        else:
            return sorted_numbers[int(median_index)]

    @classmethod
    def mode(cls, numbers):
        schema = {}

        for number in numbers:
            schema[number] = schema.get(number, 0) + 1

        highest_repetition = max(schema.values())

        mode = [
            number for number in schema if schema[number] == highest_repetition
        ]

        return mode[0]


if __name__ == "__main__":
    first_numbers = [5, 10, 50]
    second_numbers = [5, 10, 50, 8, 13, 235, 23, 5]

    print(f"First average: {Estatistica.average(first_numbers)}")
    print(f"Second average: {Estatistica.average(second_numbers)}")

    print(f"First median: {Estatistica.median(first_numbers)}")
    print(f"Second median: {Estatistica.median(second_numbers)}")

    print(f"First mode: {Estatistica.mode(first_numbers)}")
    print(f"Second mode: {Estatistica.mode(second_numbers)}")
