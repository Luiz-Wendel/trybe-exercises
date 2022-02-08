from abc import ABC, abstractmethod


class CalcularStrategy(ABC):
    @abstractmethod
    def calcular(valor):
        raise NotImplementedError


class Iss(CalcularStrategy):
    def calcular(valor):
        return valor * 0.1


class Icms(CalcularStrategy):
    def calcular(valor):
        return valor * 0.06


class Pis(CalcularStrategy):
    def calcular(valor):
        return valor * 0.0065


class Cofins(CalcularStrategy):
    def calcular(valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)


if __name__ == "__main__":
    orcamento = Orcamento(1000)
    print(f"ISS: {orcamento.calcular_imposto(Iss)}")
    print(f"ICMS: {orcamento.calcular_imposto(Icms)}")
    print(f"ICMS: {orcamento.calcular_imposto(Pis)}")
    print(f"ICMS: {orcamento.calcular_imposto(Cofins)}")
