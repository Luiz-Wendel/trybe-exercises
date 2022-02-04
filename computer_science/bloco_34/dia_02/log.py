from abc import ABC, abstractmethod
from datetime import datetime
import pathlib


class Log:
    def __init__(self, manipulators):
        self.__manipulators = set(manipulators)

    def add_manipulator(self, manipulator):
        self.__manipulators.append(manipulator)

    def info(self, message):
        self.__log("INFO", message)

    def alert(self, message):
        self.__log("ALERT", message)

    def error(self, message):
        self.__log("ERROR", message)

    def debug(self, message):
        self.__log("DEBUG", message)

    def __log(self, level, message):
        for manipulator in self.__manipulators:
            manipulator.log(self.__format(level, message))

    def __format(self, level, message):
        date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{level} - {date}]: {message}"


class LogManipulator(ABC):
    @classmethod
    @abstractmethod
    def log(cls, message):
        raise NotImplementedError


class FileLog(LogManipulator):
    @classmethod
    def log(cls, message):
        """
        How to get directory path
        Source: https://stackoverflow.com/questions/3430372/how-do-i-get-the-full-path-of-the-current-files-directory
        """
        with open(
            f"{pathlib.Path(__file__).parent.resolve()}/log.txt", "a"
        ) as file:
            print("file")
            print(message, file=file)


class ScreenLog(LogManipulator):
    @classmethod
    def log(cls, message):
        print("screen")
        print(message)


if __name__ == "__main__":
    log = Log([FileLog(), ScreenLog()])
    log.alert("Something went wrong")
