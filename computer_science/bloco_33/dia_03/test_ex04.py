from ex04 import get_valid_emails


def test_if_function_returns_a_list_of_valid_emails():
    emails = ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]
    valid_emails = ["nome@dominio.com", "outro@dominio.com"]

    result = get_valid_emails(emails)
    assert result == valid_emails
