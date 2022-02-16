def get_even_count(n):
    if n <= 1:
        return 0
    else:
        return (
            0 + get_even_count(n - 1) if (n % 2) else 1 + get_even_count(n - 1)
        )
