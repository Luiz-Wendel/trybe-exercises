class Room:
    def __init__(self, number, floor, guest_capacity, price):
        self.number = number
        self.floor = floor
        self.guest_capacity = guest_capacity
        self.price = price
        self.reserved = False


class Guest:
    def __init__(self, name, cpf):
        self.name = name
        self.cpf = cpf


class Reservation:
    def __init__(self, room, guest):
        self.room = room
        self.guest = guest


class Hotel:
    def __init__(self, name, rooms, reservations=[]):
        self.name = name
        self.rooms = rooms
        self.reservations = reservations

    def check_in(self, guests):
        available_rooms = self.available_rooms(len(guests))

        if not available_rooms:
            raise IndexError("No rooms available for this guest quantity")

        first_available_room = available_rooms[0]
        first_available_room.reserved = True

        for guest in guests:
            self.reservations.append(Reservation(first_available_room, guest))

    def check_out(self, room):
        self.reservations = [
            reservation
            for reservation in self.reservations
            if reservation.room != room
        ]
        room.reserved = False

    def available_rooms(self, guest_quantity):
        available_rooms = [
            room
            for room in self.rooms
            if not room.reserved and room.guest_capacity >= guest_quantity
        ]
        """
        Python custom sorting
        Source: https://wiki.python.org/moin/HowTo/Sorting/
        """
        return sorted(available_rooms, key=lambda room: room.guest_capacity)


if __name__ == "__main__":
    guests = [
        Guest("Fulano", 0),
        Guest("Ciclano", 1),
        Guest("Beltrano", 2),
        Guest("Deltrano", 3),
        Guest("Alfonso", 4),
        Guest("Wesley", 5),
        Guest("João", 6),
        Guest("Maria", 7),
        Guest("Miguel", 8),
        Guest("Isabella", 9),
    ]
    rooms = [
        Room(100, 1, 4, 100),
        Room(101, 1, 4, 100),
        Room(102, 1, 6, 140),
        Room(103, 1, 8, 160),
        Room(200, 2, 8, 160),
        Room(201, 2, 6, 140),
        Room(202, 2, 4, 100),
        Room(203, 2, 4, 100),
    ]
    hotel = Hotel("Transilvânia", rooms)

    hotel.check_in(guests[:2])
    print(hotel.rooms[0].reserved)

    hotel.check_in(guests[:-2])
    print(hotel.rooms[3].reserved)

    hotel.check_out(rooms[0])
    print(hotel.rooms[0].reserved)
    print(hotel.rooms[3].reserved)

    hotel.check_in(guests[:-2])
    print(hotel.rooms[4].reserved)

    print(hotel.available_rooms(5))
    print(hotel.available_rooms(8))

    hotel.check_in(guests[:-2])
