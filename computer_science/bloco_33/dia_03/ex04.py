from ex03 import validate_email


def get_valid_emails(emails):
    valid_emails = []

    for email in emails:
        if validate_email(email):
            valid_emails.append(email)

    return valid_emails
