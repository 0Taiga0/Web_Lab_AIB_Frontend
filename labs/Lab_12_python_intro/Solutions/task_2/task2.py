from heapq import heappop, heappush


def medians_sum(numbers: list) -> int:
    mediansSum = 0
    firstHalf, secondHalf = [], []
    for number in numbers:
        heappush(firstHalf, -number)
        heappush(secondHalf, -heappop(firstHalf))
        if len(firstHalf) < len(secondHalf):
            heappush(firstHalf, -heappop(secondHalf))
        mediansSum += -firstHalf[0]
    return mediansSum


if __name__ == "__main__":
    arr = [5, 10, 8, 1, 7, 3, 9, 6, 2, 4]
    print(medians_sum(arr))
