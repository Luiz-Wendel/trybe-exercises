def validate_username(username):
    valid_chars = "-_"

    if not username[0].isalpha():
        return False

    for char in username:
        if (
            not char.isalpha()
            and not char.isdigit()
            and char not in valid_chars
        ):
            return False

    return True


def validate_website(website):
    for char in website:
        if not char.isalpha() and not char.isdigit():
            return False

    return True


def validate_extension(extension):
    if len(extension) > 3:
        return False

    return True


def validate_email(email):
    if "@" not in email or "." not in email:
        return False

    username, domain = email.split("@")
    website, extension = domain.split(".")

    return (
        validate_username(username)
        and validate_website(website)
        and validate_extension(extension)
    )


if __name__ == "__main__":
    print(validate_email("nome@dominio.com"))
    print(validate_email("nome23@dominio2.br"))
    print(validate_email("errad#@dominio.com"))
    print(validate_email("outro@domi-nio.com"))
    print(validate_email("outro@dominio.coms"))
