def find_higher_number(numbers):
    if len(numbers) == 1:
        return numbers[0]
    else:
        return (
            numbers[0]
            if numbers[0] >= find_higher_number(numbers[1:])
            else find_higher_number(numbers[1:])
        )
