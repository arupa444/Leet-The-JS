def numWaterBottles(numBottles: int, numExchange: int) -> int:
    return numBottles + ((numBottles - 1) // (numExchange - 1))
print(numWaterBottles(9, 3))