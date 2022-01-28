from abc import ABC, abstractmethod
import math


class GeometricFigure(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimeter(self):
        raise NotImplementedError


class Square(GeometricFigure):
    def __init__(self, side):
        super().__init__()
        self.side = side

    def area(self):
        return self.side ** 2

    def perimeter(self):
        return self.side * 4


class Rectangle(GeometricFigure):
    def __init__(self, width, height):
        super().__init__()
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return self.width * 2 + self.height * 2


class Circle(GeometricFigure):
    def __init__(self, radius):
        super().__init__()
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

    def perimeter(self):
        return 2 * math.pi * self.radius


if __name__ == "__main__":
    square = Square(2)
    print(f"Square area: {square.area()}")
    print(f"Square perimeter: {square.perimeter()}")

    rectangle = Rectangle(4, 2)
    print(f"Rectangle area: {rectangle.area()}")
    print(f"Rectangle perimeter: {rectangle.perimeter()}")

    circle = Circle(15)
    print(f"Circle area:{circle.area()}")
    print(f"Circle perimeter: {circle.perimeter()}")
