def get_type_of_triangle(first_side, second_side, third_side):
    is_triangle = (
        first_side + second_side > third_side
        and second_side + third_side > first_side
        and first_side + third_side > second_side
    )

    if not is_triangle:
        return "Not a triangle"
    elif first_side == second_side == third_side:
        return "Equilateral triangle"
    elif (
        first_side == second_side
        or second_side == third_side
        or first_side == third_side
    ):
        return "Isosceles triangle"
    else:
        return "Scalene triangle"


if __name__ == "__main__":
    print(get_type_of_triangle(18, 22, 40))
    print(get_type_of_triangle(1, 1, 1))
    print(get_type_of_triangle(203, 203, 140))
    print(get_type_of_triangle(131, 148, 203))
