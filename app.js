const dobbleMatrix = [[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]]
let cards = Array.from(Array(57), () => new Array(8)); // 57 cards containing 8 images
const discardCardDrawn = Array.from(document.querySelectorAll('.discardCardWord'))
const playerCardDrawn = Array.from(document.querySelectorAll('.playerCardWord'))
let words = new Array(57) // object array, it will be fill by the user// object array, it will be fill by the user
//words =[{text1: 'able', text2: 'capaz'}, {text1: 'bad', text2: 'malo'}, {text1: 'best', text2: 'mejor'}, {text1: 'better', text2: 'mejor'}, {text1: 'big', text2: 'grande'}, {text1: 'black', text2: 'negro'}, {text1: 'certain', text2: 'cierto'}, {text1: 'clear', text2: 'claro'}, {text1: 'confident', text2: 'seguro'}, {text1: 'different', text2: 'diferente'}, {text1: 'early', text2: 'temprano'}, {text1: 'easy', text2: 'fácil'}, {text1: 'economic', text2: 'económico'}, {text1: 'federal', text2: 'federal'}, {text1: 'free', text2: 'libre'}, {text1: 'full', text2: 'completo'}, {text1: 'funny', text2: 'gracioso'}, {text1: 'generous', text2: 'generoso'}, {text1: 'good', text2: 'bien'}, {text1: 'great', text2: 'estupendo'}, {text1: 'hard', text2: 'difícil'}, {text1: 'high', text2: 'elevado'}, {text1: 'human', text2: 'humano'}, {text1: 'important', text2: 'importante'}, {text1: 'interesting', text2: 'interesante'}, {text1: 'international', text2: 'internacional'}, {text1: 'large', text2: 'grande'}, {text1: 'late', text2: 'tarde'}, {text1: 'little', text2: 'pequeño'}, {text1: 'lively', text2: 'dinámico'}, {text1: 'local', text2: 'local'}, {text1: 'long', text2: 'largo'}, {text1: 'low', text2: 'bajo'}, {text1: 'major', text2: 'importante'}, {text1: 'military', text2: 'militar'}, {text1: 'national', text2: 'nacional'}, {text1: 'new', text2: 'nuevo'}, {text1: 'noisy', text2: 'ruidoso'}, {text1: 'old', text2: 'viejo'}, {text1: 'only', text2: 'solo'}, {text1: 'optimistic', text2: 'optimista'}, {text1: 'other', text2: 'otro'}, {text1: 'political', text2: 'político'}, {text1: 'possible', text2: 'posible'}, {text1: 'public', text2: 'público'}, {text1: 'quiet', text2: 'tranquilo'}, {text1: 'real', text2: 'verdadero'}, {text1: 'recent', text2: 'reciente'}, {text1: 'right', text2: 'derecho'}, {text1: 'small', text2: 'pequeña'}, {text1: 'social', text2: 'social'}, {text1: 'special', text2: 'especial'}, {text1: 'strong', text2: 'fuerte'}, {text1: 'sure', text2: 'seguro'}, {text1: 'white', text2: 'blanco'}, {text1: 'whole', text2: 'entero'}, {text1: 'young', text2: 'joven'}
//] 
words =[{text1: 'ant', text2: 'hormiga',image: 'images/animals/ant.gif', sound: 'sounds/animals/ant.mp3'}, {text1: 'badger', text2: 'tejón',image: 'images/animals/badger.gif', sound: 'sounds/animals/badger.mp3'}, {text1: 'bat', text2: 'murciélago',image: 'images/animals/bat.gif', sound: 'sounds/animals/bat.mp3'}, {text1: 'bee', text2: 'abeja',image: 'images/animals/bee.gif', sound: 'sounds/animals/bee.mp3'}, {text1: 'budgie', text2: 'periquito',image: 'images/animals/budgie.gif', sound: 'sounds/animals/budgie.mp3'}, {text1: 'butterfly', text2: 'mariposa',image: 'images/animals/butterfly.gif', sound: 'sounds/animals/butterfly.mp3'}, {text1: 'canary', text2: 'canario',image: 'images/animals/canary.gif', sound: 'sounds/animals/canary.mp3'}, {text1: 'cat', text2: 'gato',image: 'images/animals/cat.gif', sound: 'sounds/animals/cat.mp3'}, {text1: 'cattle', text2: 'ganado',image: 'images/animals/cattle.gif', sound: 'sounds/animals/cattle.mp3'}, {text1: 'chicken', text2: 'pollo',image: 'images/animals/chicken.gif', sound: 'sounds/animals/chicken.mp3'}, {text1: 'clam', text2: 'almeja',image: 'images/animals/clam.gif', sound: 'sounds/animals/clam.mp3'}, {text1: 'cockatiel', text2: 'cacatúa',image: 'images/animals/cockatiel.gif', sound: 'sounds/animals/cockatiel.mp3'}, {text1: 'cockatoo', text2: 'cacatúa',image: 'images/animals/cockatoo.gif', sound: 'sounds/animals/cockatoo.mp3'}, {text1: 'cockle', text2: 'berberecho',image: 'images/animals/cockle.jpg', sound: 'sounds/animals/cockle.mp3'}, {text1: 'crab', text2: 'cangrejo',image: 'images/animals/crab.gif', sound: 'sounds/animals/crab.mp3'}, {text1: 'crow', text2: 'cuervo',image: 'images/animals/crow.jpg', sound: 'sounds/animals/crow.mp3'}, {text1: 'deer', text2: 'ciervo',image: 'images/animals/deer.gif', sound: 'sounds/animals/deer.mp3'}, {text1: 'dog', text2: 'perro',image: 'images/animals/dog.gif', sound: 'sounds/animals/dog.mp3'}, {text1: 'donkey', text2: 'burro',image: 'images/animals/donkey.gif', sound: 'sounds/animals/donkey.mp3'}, {text1: 'dove', text2: 'paloma',image: 'images/animals/dove.gif', sound: 'sounds/animals/dove.mp3'}, {text1: 'dragonfly', text2: 'libélula',image: 'images/animals/dragonfly.gif', sound: 'sounds/animals/dragonfly.mp3'}, {text1: 'duck', text2: 'pato',image: 'images/animals/duck.gif', sound: 'sounds/animals/duck.mp3'}, {text1: 'ferret', text2: 'hurón',image: 'images/animals/ferret.gif', sound: 'sounds/animals/ferret.mp3'}, {text1: 'fly', text2: 'mosca',image: 'images/animals/fly.gif', sound: 'sounds/animals/fly.mp3'}, {text1: 'fox', text2: 'zorro',image: 'images/animals/fox.gif', sound: 'sounds/animals/fox.mp3'}, {text1: 'frog', text2: 'rana',image: 'images/animals/frog.gif', sound: 'sounds/animals/frog.mp3'}, {text1: 'gerbil', text2: 'jerbo',image: 'images/animals/gerbil.gif', sound: 'sounds/animals/gerbil.mp3'}, {text1: 'goat', text2: 'cabra',image: 'images/animals/goat.gif', sound: 'sounds/animals/goat.mp3'}, {text1: 'goldfish', text2: 'pez de colores',image: 'images/animals/goldfish.gif', sound: 'sounds/animals/goldfish.mp3'}, {text1: 'goose', text2: 'ganso',image: 'images/animals/goose.gif', sound: 'sounds/animals/goose.mp3'}, {text1: 'guinea pig', text2: 'conejillo de indias',image: 'images/animals/guinea_pig.gif', sound: 'sounds/animals/guinea_pig.mp3'}, {text1: 'hamster', text2: 'hámster',image: 'images/animals/hamster.gif', sound: 'sounds/animals/hamster.mp3'}, {text1: 'hare', text2: 'liebre',image: 'images/animals/hare.gif', sound: 'sounds/animals/hare.mp3'}, {text1: 'hawk', text2: 'halcón',image: 'images/animals/hawk.gif', sound: 'sounds/animals/hawk.mp3'}, {text1: 'hedgehog', text2: 'erizo',image: 'images/animals/hedgehog.gif', sound: 'sounds/animals/hedgehog.mp3'}, {text1: 'heron', text2: 'garza',image: 'images/animals/heron.gif', sound: 'sounds/animals/heron.mp3'}, {text1: 'horse', text2: 'caballo',image: 'images/animals/horse.gif', sound: 'sounds/animals/horse.mp3'}, {text1: 'kingfisher', text2: 'martín pescador',image: 'images/animals/kingfisher.gif', sound: 'sounds/animals/kingfisher.mp3'}, {text1: 'lobster', text2: 'langosta',image: 'images/animals/lobster.gif', sound: 'sounds/animals/lobster.mp3'}, {text1: 'mole', text2: 'topo',image: 'images/animals/mole.gif', sound: 'sounds/animals/mole.mp3'}, {text1: 'mosquito', text2: 'mosquito',image: 'images/animals/mosquito.jpg', sound: 'sounds/animals/mosquito.mp3'}, {text1: 'moth', text2: 'polilla',image: 'images/animals/moth.gif', sound: 'sounds/animals/moth.mp3'}, {text1: 'mouse', text2: 'ratón',image: 'images/animals/mouse.jpg', sound: 'sounds/animals/mouse.mp3'}, {text1: 'mussel', text2: 'mejillón',image: 'images/animals/mussel.jpg', sound: 'sounds/animals/mussel.mp3'}, {text1: 'newt', text2: 'tritón',image: 'images/animals/newt.gif', sound: 'sounds/animals/newt.mp3'}, {text1: 'otter', text2: 'nutria',image: 'images/animals/otter.gif', sound: 'sounds/animals/otter.mp3'}, {text1: 'owl', text2: 'búho',image: 'images/animals/owl.gif', sound: 'sounds/animals/owl.mp3'}, {text1: 'oyster', text2: 'ostra',image: 'images/animals/oyster.gif', sound: 'sounds/animals/oyster.mp3'}, {text1: 'parrot', text2: 'loro',image: 'images/animals/parrot.gif', sound: 'sounds/animals/parrot.mp3'}, {text1: 'peacock', text2: 'pavo real',image: 'images/animals/peacock.gif', sound: 'sounds/animals/peacock.mp3'}, {text1: 'pheasant', text2: 'faisán',image: 'images/animals/pheasant.gif', sound: 'sounds/animals/pheasant.mp3'}, {text1: 'pig', text2: 'cerdo',image: 'images/animals/pig.gif', sound: 'sounds/animals/pig.mp3'}, {text1: 'pigeon', text2: 'paloma',image: 'images/animals/pigeon.gif', sound: 'sounds/animals/pigeon.mp3'}, {text1: 'pike', text2: 'lucio',image: 'images/animals/pike.gif', sound: 'sounds/animals/pike.mp3'}, {text1: 'rabbit', text2: 'conejo',image: 'images/animals/rabbit.gif', sound: 'sounds/animals/rabbit.mp3'}, {text1: 'rat', text2: 'rata',image: 'images/animals/rat.gif', sound: 'sounds/animals/rat.mp3'}, {text1: 'robin', text2: 'robin',image: 'images/animals/robin.gif', sound: 'sounds/animals/robin.mp3'}
]

console.log(words)
const playerPointsHTML=document.querySelector('#playerPoints')
let playerPoints = 0
let cardsCount = 0
const match=document.querySelector('#match')
match.innerHTML =''

function createCards(){
    let count = 0
    for(let i=0;i<57;i++){
        for (let j=0;j<57;j++){
            if((dobbleMatrix[i][j] == 1)&& (count<8)){
                cards[i][count] = j //en las cartas guardo solo el numero, el orden de la palabra dentro del array word
                count++
            }
        }
        count = 0
    }
}
function drawDiscardCard(cardNumber,cant){
    for(let i=0;i<8;i++){
        if(cant==1){
            discardCardDrawn[i].innerHTML=''
            discardCardDrawn[i].classList.remove("smaller")
            //carta de por medio muestro con imagenes
            if (cardsCount%2==0){
                let picture = document.createElement("img")
                picture.src = words[cards[cardNumber][i]].image 
                picture.alt = words[cards[cardNumber][i]].text1 
                discardCardDrawn[i].appendChild(picture)
            }else{
                discardCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            }
        }else{
            discardCardDrawn[i].innerHTML=''
            discardCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            + " <br/> "+words[cards[cardNumber][i]].text2 
            let picture = document.createElement("img")
            picture.src = words[cards[cardNumber][i]].image 
            picture.alt = words[cards[cardNumber][i]].text1 
            discardCardDrawn[i].appendChild(picture)
            discardCardDrawn[i].classList.add("smaller")
        }
        //if still there isnt an image draw it
        // if (!discardCardDrawn[i].querySelectorAll('img').length>0){
        //     let picture = document.createElement("img")
        //     picture.src = words[cards[cardNumber][i]].image 
        //     picture.alt = words[cards[cardNumber][i]].text1 
        //     discardCardDrawn[i].appendChild(picture)
        // }
    }
    cardsCount++
    console.log(cardsCount)
}
function drawPlayerCard(cardNumber,cant){
    for(let i=0;i<8;i++){
        if(cant==1){
            // playerCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1
            // let picture=playerCardDrawn[i].querySelectorAll('img')
            // picture.forEach((x)=> x.remove());
            // playerCardDrawn[i].classList.remove("smaller")

            playerCardDrawn[i].innerHTML=''
            playerCardDrawn[i].classList.remove("smaller")
            //carta de por medio muestro con imagenes
            console.log("par?")
            console.log(cardsCount%2==1)
            if (cardsCount%2==0){
                let picture = document.createElement("img")
                picture.src = words[cards[cardNumber][i]].image 
                picture.alt = words[cards[cardNumber][i]].text1 
                playerCardDrawn[i].appendChild(picture)
            }else{
                playerCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            }


        }else{
            // playerCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            // + " <br/> "+words[cards[cardNumber][i]].text2 
            // playerCardDrawn[i].classList.add("smaller")
            //if still there isnt an image draw it
            // if (!playerCardDrawn[i].querySelectorAll('img').length>0){
            //     let picture = document.createElement("img")
            //     picture.src = words[cards[cardNumber][i]].image 
            //     picture.alt = words[cards[cardNumber][i]].text1 
            //     playerCardDrawn[i].appendChild(picture)
            // }

            playerCardDrawn[i].innerHTML=''
            playerCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            + " <br/> "+words[cards[cardNumber][i]].text2 
            let picture = document.createElement("img")
            picture.src = words[cards[cardNumber][i]].image 
            picture.alt = words[cards[cardNumber][i]].text1 
            playerCardDrawn[i].appendChild(picture)
            playerCardDrawn[i].classList.add("smaller")
        }
    }
}

createCards()
discardCard = Math.floor(Math.random()*57)
drawDiscardCard(discardCard,1)

// habria dos maneras o reparto las cartas Reales o cada vez saco una al azar con repeticion
// voy a hacerlo con repeticion
playerCard = Math.floor(Math.random()*57)
console.log(playerCard)
drawPlayerCard(playerCard,1)

function checkWord(e){
    if( cards[discardCard].includes(cards[playerCard][e.currentTarget.dataset.pcid]) ){
        // console.log("correct")
        let place = e.currentTarget.dataset.pcid
        match.classList.add('correct')
        match.classList.remove('incorrect')
        match.innerHTML = "correct!"
        playerCardDrawn[place].classList.add('matched')
        let aux = cards[discardCard].indexOf(cards[playerCard][place])
        discardCardDrawn[aux].classList.add('matched')

        setTimeout(()=>playerCardDrawn[place].classList.remove('matched'), 1000);
        setTimeout(()=>discardCardDrawn[aux].classList.remove('matched'),1000);
        setTimeout(()=>match.innerHTML = "", 1000);
        playerPoints +=10
        playerPointsHTML.innerHTML = playerPoints
        discardCard = playerCard
        setTimeout(()=>drawDiscardCard(discardCard,1), 1000);
        // drawDiscardCard(discardCard,1)
        playerCard = Math.floor(Math.random()*57)
        setTimeout(()=>drawPlayerCard(playerCard,1), 1000);
        // drawPlayerCard(playerCard,1)
        console.log("checkWord e.currentTarget.dataset.pcid")
        console.log(e.currentTarget.dataset.pcid)
        console.log(place)

    }else{
        match.classList.add('incorrect')
        match.classList.remove('correct')
        match.innerHTML = "incorrect!"
        setTimeout(()=>match.innerHTML = "", 1000);
    }

}
playerCardDrawn.forEach(x=>x.addEventListener('click',(e)=>playerCardPlay(e)))
// console.log(discardCardDrawn)
discardCardDrawn.forEach(x=>x.addEventListener('click',(e)=>discardCardPlay(e)))
playerCardDrawn.forEach(x=>x.addEventListener('click',(e)=>checkWord(e)))

playerCardDrawn.forEach(x=>x.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    drawPlayerCard(playerCard,2)
    playerCardPlay(e)
    setTimeout(()=>drawPlayerCard(playerCard,1), 1000);
    return false;
}, false))

discardCardDrawn.forEach(x=>x.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    drawDiscardCard(discardCard,2)
    discardCardPlay(e)
    setTimeout(()=>drawDiscardCard(discardCard,1), 1000);
    return false;
}, false))

function playerCardPlay(e){
    console.log("playercardplay e.currentTarget.dataset.pcid")
    console.log([e.currentTarget.dataset.pcid])
    // console.log(cards[playerCard][e.currentTarget.dataset.pcid])
    // console.log(words[cards[playerCard][e.currentTarget.dataset.pcid]].sound)
    let audio = new Audio(words[cards[playerCard][e.currentTarget.dataset.pcid]].sound);
    audio.volume = 0.2;
    audio.play();
}
function discardCardPlay(e){
    console.log("discardCardPlay e.currentTarget.dataset.dcid")
    console.log([e.currentTarget.dataset.dcid])
    let audio = new Audio(words[cards[discardCard][e.currentTarget.dataset.dcid]].sound);
    audio.volume = 0.2;
    audio.play();
}


