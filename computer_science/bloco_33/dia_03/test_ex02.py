import pytest
from ex02 import decode


def test_if_it_decodes_strings_with_valid_chars_only():
    decoded = decode("MY-MISERABLE-JOB")
    assert decoded == "69-647372253-562"


def test_if_it_decodes_strings_with_valid_chars_and_numbers():
    decoded = decode("1-HOME-SWEET-HOME")
    assert decoded == "1-4663-79338-4663"


def test_if_it_decodes_strings_with_length_greater_than_thirty():
    decoded = decode("1-HOME-SWEET-HOME1-HOME-SWEET-HOME")
    assert decoded == "1-4663-79338-46631-4663-79338-4663"


def test_if_it_decodes_empty_strings():
    decoded = decode("")
    assert decoded == ""


def test_if_it_raises_type_error_if_called_with_invalid_chars():
    with pytest.raises(TypeError, match="Invalid input"):
        decode("1-4663-79338-4663")
