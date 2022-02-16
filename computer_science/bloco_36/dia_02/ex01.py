def get_even_count(n):
    even_counter = 0

    for number in range(1, n + 1):
        if number % 2 == 0:
            even_counter += 1

    return even_counter
