def print_inverse_stair(string):
    for index in range(len(string)):
        if index == 0:
            print(string)
        else:
            print(string[:-index])


if __name__ == "__main__":
    print_inverse_stair("PEDRO")
    print_inverse_stair("ELI")
