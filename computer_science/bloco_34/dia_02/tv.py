class Tv:
    MAX_VOLUME = 99
    MIN_VOLUME = 0
    VOLUME_STEP = 1
    MAX_CHANNEL = 99
    MIN_CHANNEL = 1

    def __init__(self, size):
        self._volume = 50
        self._channel = 1
        self._size = size
        self._power = False

    def turn_up_volume(self):
        if self._power and self._volume < self.MAX_VOLUME:
            self._volume += self.VOLUME_STEP

    def lower_volume(self):
        if self._power and self._volume > self.MIN_VOLUME:
            self._volume -= self.VOLUME_STEP

    def change_channel(self, new_channel):
        if self._power:
            if self.MIN_CHANNEL < new_channel < self.MAX_CHANNEL:
                self._channel = new_channel
            else:
                raise ValueError()

    def toggle_power(self):
        self._power = not self._power


if __name__ == "__main__":
    tv = Tv(42)
    print(
        f"""
Size: {tv._size},
Power: {tv._power},
Volume: {tv._volume},
Channel: {tv._channel}
"""
    )
    tv.turn_up_volume()
    print(f"TV off => Volume +1: {tv._volume}")
    tv.lower_volume()
    print(f"TV off => Volume -1: {tv._volume}")
    tv.change_channel(23)
    print(f"TV off => Channel 23: {tv._channel}")
    tv.toggle_power()
    print(f"TV power: {tv._power}")
    for _ in range(15):
        tv.turn_up_volume()
    print(f"TV on => Volume +15: {tv._volume}")
    for _ in range(10):
        tv.lower_volume()
    print(f"TV on => Volume -10: {tv._volume}")
    tv.change_channel(23)
    print(f"TV on => Channel 23: {tv._channel}")
