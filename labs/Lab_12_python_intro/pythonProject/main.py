# from math import factorial
#
#
# def countWays(N, M):
#     NM = [N - 1, M - 1]
#     D = [min(NM) - (min(NM) % 3)] * 2
#     it = int(D[0] / 1.5)
#     n1 = int(it / 2)
#     n = 1
#     dif = [x - y for x, y in zip(NM, D)]
#
#     if NM[0] == NM[1]:
#         return factorial(it) / (factorial(int(it / 2))
#                                 * factorial(int(it / 2)))
#     while dif != [1, 2] and dif != [2, 1]:
#         if NM[0] < NM[1]:
#             D = [D[0] - 1, D[1] + 1]
#         else:
#             D = [D[0] + 1, D[1] - 1]
#         n += 1
#         dif = [x - y for x, y in zip(NM, D)]
#     print(n)
#     return factorial(it + 1) / (factorial(n1 - n)
#                                 * factorial(n1 + n))


def oleg_ways(N, M):
    dp = [[0] * M for _ in range(N)]
    dp[0][0] = 1  # начальная позиция коня
    for i in range(N):
        for j in range(M):
            if i - 2 >= 0 and j - 1 >= 0:
                dp[i][j] += dp[i - 2][j - 1]
            if i - 1 >= 0 and j - 2 >= 0:
                dp[i][j] += dp[i - 1][j - 2]
    return dp[N - 1][M - 1]


if __name__ == '__main__':
    N, M = 31, 34
    ways = oleg_ways(N, M)

    print(ways)

