from ex03 import validate_email


def test_check_if_valid_email_format_returns_true():
    result = validate_email("user_name@website.ext")
    assert result is True


def test_check_if_email_is_invalid_if_passed_without_at():
    result = validate_email("usernamedomainextension")
    assert result is False


def test_check_if_email_is_invalid_if_username_is_passed_with_invalid_characters():
    invalid_emails = [
        "user*name@domain.ext",
        "user/name@domain.ext",
        "user.name@domain.ext",
    ]

    for invalid_email in invalid_emails:
        result = validate_email(invalid_email)
        assert result is False


def test_check_if_email_is_invalid_if_username_is_passed_beginning_with_anything_else_besides_a_letter():
    invalid_emails = [
        "1username@domain.ext",
        "-username@domain.ext",
        "_username@domain.ext",
    ]

    for invalid_email in invalid_emails:
        result = validate_email(invalid_email)
        assert result is False


def test_check_if_email_is_invalid_if_website_is_passed_with_invalid_characters():
    invalid_emails = [
        "username@web*site.ext",
        "username@web/site.ext",
        "username@web_site.ext",
    ]

    for invalid_email in invalid_emails:
        result = validate_email(invalid_email)
        assert result is False


def test_check_if_email_is_invalid_if_extension_length_is_greater_than_three():
    invalid_emails = [
        "username@domain.extension",
        "username@domain.comercial",
    ]

    for invalid_email in invalid_emails:
        result = validate_email(invalid_email)
        assert result is False


# O tamanho máximo da extensão é três.
