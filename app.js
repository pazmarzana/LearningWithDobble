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
let words = new Array(57) // object array, it will be fill by the user// object array, it will be fill by the user
//words =[{text1: 'able', text2: 'capaz'}, {text1: 'bad', text2: 'malo'}, {text1: 'best', text2: 'mejor'}, {text1: 'better', text2: 'mejor'}, {text1: 'big', text2: 'grande'}, {text1: 'black', text2: 'negro'}, {text1: 'certain', text2: 'cierto'}, {text1: 'clear', text2: 'claro'}, {text1: 'confident', text2: 'seguro'}, {text1: 'different', text2: 'diferente'}, {text1: 'early', text2: 'temprano'}, {text1: 'easy', text2: 'fácil'}, {text1: 'economic', text2: 'económico'}, {text1: 'federal', text2: 'federal'}, {text1: 'free', text2: 'libre'}, {text1: 'full', text2: 'completo'}, {text1: 'funny', text2: 'gracioso'}, {text1: 'generous', text2: 'generoso'}, {text1: 'good', text2: 'bien'}, {text1: 'great', text2: 'estupendo'}, {text1: 'hard', text2: 'difícil'}, {text1: 'high', text2: 'elevado'}, {text1: 'human', text2: 'humano'}, {text1: 'important', text2: 'importante'}, {text1: 'interesting', text2: 'interesante'}, {text1: 'international', text2: 'internacional'}, {text1: 'large', text2: 'grande'}, {text1: 'late', text2: 'tarde'}, {text1: 'little', text2: 'pequeño'}, {text1: 'lively', text2: 'dinámico'}, {text1: 'local', text2: 'local'}, {text1: 'long', text2: 'largo'}, {text1: 'low', text2: 'bajo'}, {text1: 'major', text2: 'importante'}, {text1: 'military', text2: 'militar'}, {text1: 'national', text2: 'nacional'}, {text1: 'new', text2: 'nuevo'}, {text1: 'noisy', text2: 'ruidoso'}, {text1: 'old', text2: 'viejo'}, {text1: 'only', text2: 'solo'}, {text1: 'optimistic', text2: 'optimista'}, {text1: 'other', text2: 'otro'}, {text1: 'political', text2: 'político'}, {text1: 'possible', text2: 'posible'}, {text1: 'public', text2: 'público'}, {text1: 'quiet', text2: 'tranquilo'}, {text1: 'real', text2: 'verdadero'}, {text1: 'recent', text2: 'reciente'}, {text1: 'right', text2: 'derecho'}, {text1: 'small', text2: 'pequeña'}, {text1: 'social', text2: 'social'}, {text1: 'special', text2: 'especial'}, {text1: 'strong', text2: 'fuerte'}, {text1: 'sure', text2: 'seguro'}, {text1: 'white', text2: 'blanco'}, {text1: 'whole', text2: 'entero'}, {text1: 'young', text2: 'joven'}
//] 
//animals
// words =[{text1: 'ant', text2: 'hormiga',image: 'images/animals/ant.gif', sound: 'sounds/animals/ant.mp3'}, {text1: 'badger', text2: 'tejón',image: 'images/animals/badger.gif', sound: 'sounds/animals/badger.mp3'}, {text1: 'bat', text2: 'murciélago',image: 'images/animals/bat.gif', sound: 'sounds/animals/bat.mp3'}, {text1: 'bee', text2: 'abeja',image: 'images/animals/bee.gif', sound: 'sounds/animals/bee.mp3'}, {text1: 'budgie', text2: 'periquito',image: 'images/animals/budgie.gif', sound: 'sounds/animals/budgie.mp3'}, {text1: 'butterfly', text2: 'mariposa',image: 'images/animals/butterfly.gif', sound: 'sounds/animals/butterfly.mp3'}, {text1: 'canary', text2: 'canario',image: 'images/animals/canary.gif', sound: 'sounds/animals/canary.mp3'}, {text1: 'cat', text2: 'gato',image: 'images/animals/cat.gif', sound: 'sounds/animals/cat.mp3'}, {text1: 'cattle', text2: 'ganado',image: 'images/animals/cattle.gif', sound: 'sounds/animals/cattle.mp3'}, {text1: 'chicken', text2: 'pollo',image: 'images/animals/chicken.gif', sound: 'sounds/animals/chicken.mp3'}, {text1: 'clam', text2: 'almeja',image: 'images/animals/clam.gif', sound: 'sounds/animals/clam.mp3'}, {text1: 'cockatiel', text2: 'cacatúa',image: 'images/animals/cockatiel.gif', sound: 'sounds/animals/cockatiel.mp3'}, {text1: 'cockatoo', text2: 'cacatúa',image: 'images/animals/cockatoo.gif', sound: 'sounds/animals/cockatoo.mp3'}, {text1: 'cockle', text2: 'berberecho',image: 'images/animals/cockle.jpg', sound: 'sounds/animals/cockle.mp3'}, {text1: 'crab', text2: 'cangrejo',image: 'images/animals/crab.gif', sound: 'sounds/animals/crab.mp3'}, {text1: 'crow', text2: 'cuervo',image: 'images/animals/crow.jpg', sound: 'sounds/animals/crow.mp3'}, {text1: 'deer', text2: 'ciervo',image: 'images/animals/deer.gif', sound: 'sounds/animals/deer.mp3'}, {text1: 'dog', text2: 'perro',image: 'images/animals/dog.gif', sound: 'sounds/animals/dog.mp3'}, {text1: 'donkey', text2: 'burro',image: 'images/animals/donkey.gif', sound: 'sounds/animals/donkey.mp3'}, {text1: 'dove', text2: 'paloma',image: 'images/animals/dove.gif', sound: 'sounds/animals/dove.mp3'}, {text1: 'dragonfly', text2: 'libélula',image: 'images/animals/dragonfly.gif', sound: 'sounds/animals/dragonfly.mp3'}, {text1: 'duck', text2: 'pato',image: 'images/animals/duck.gif', sound: 'sounds/animals/duck.mp3'}, {text1: 'ferret', text2: 'hurón',image: 'images/animals/ferret.gif', sound: 'sounds/animals/ferret.mp3'}, {text1: 'fly', text2: 'mosca',image: 'images/animals/fly.gif', sound: 'sounds/animals/fly.mp3'}, {text1: 'fox', text2: 'zorro',image: 'images/animals/fox.gif', sound: 'sounds/animals/fox.mp3'}, {text1: 'frog', text2: 'rana',image: 'images/animals/frog.gif', sound: 'sounds/animals/frog.mp3'}, {text1: 'gerbil', text2: 'jerbo',image: 'images/animals/gerbil.gif', sound: 'sounds/animals/gerbil.mp3'}, {text1: 'goat', text2: 'cabra',image: 'images/animals/goat.gif', sound: 'sounds/animals/goat.mp3'}, {text1: 'goldfish', text2: 'pez de colores',image: 'images/animals/goldfish.gif', sound: 'sounds/animals/goldfish.mp3'}, {text1: 'goose', text2: 'ganso',image: 'images/animals/goose.gif', sound: 'sounds/animals/goose.mp3'}, {text1: 'guinea pig', text2: 'conejillo de indias',image: 'images/animals/guinea_pig.gif', sound: 'sounds/animals/guinea_pig.mp3'}, {text1: 'hamster', text2: 'hámster',image: 'images/animals/hamster.gif', sound: 'sounds/animals/hamster.mp3'}, {text1: 'hare', text2: 'liebre',image: 'images/animals/hare.gif', sound: 'sounds/animals/hare.mp3'}, {text1: 'hawk', text2: 'halcón',image: 'images/animals/hawk.gif', sound: 'sounds/animals/hawk.mp3'}, {text1: 'hedgehog', text2: 'erizo',image: 'images/animals/hedgehog.gif', sound: 'sounds/animals/hedgehog.mp3'}, {text1: 'heron', text2: 'garza',image: 'images/animals/heron.gif', sound: 'sounds/animals/heron.mp3'}, {text1: 'horse', text2: 'caballo',image: 'images/animals/horse.gif', sound: 'sounds/animals/horse.mp3'}, {text1: 'kingfisher', text2: 'martín pescador',image: 'images/animals/kingfisher.gif', sound: 'sounds/animals/kingfisher.mp3'}, {text1: 'lobster', text2: 'langosta',image: 'images/animals/lobster.gif', sound: 'sounds/animals/lobster.mp3'}, {text1: 'mole', text2: 'topo',image: 'images/animals/mole.gif', sound: 'sounds/animals/mole.mp3'}, {text1: 'mosquito', text2: 'mosquito',image: 'images/animals/mosquito.jpg', sound: 'sounds/animals/mosquito.mp3'}, {text1: 'moth', text2: 'polilla',image: 'images/animals/moth.gif', sound: 'sounds/animals/moth.mp3'}, {text1: 'mouse', text2: 'ratón',image: 'images/animals/mouse.jpg', sound: 'sounds/animals/mouse.mp3'}, {text1: 'mussel', text2: 'mejillón',image: 'images/animals/mussel.jpg', sound: 'sounds/animals/mussel.mp3'}, {text1: 'newt', text2: 'tritón',image: 'images/animals/newt.gif', sound: 'sounds/animals/newt.mp3'}, {text1: 'otter', text2: 'nutria',image: 'images/animals/otter.gif', sound: 'sounds/animals/otter.mp3'}, {text1: 'owl', text2: 'búho',image: 'images/animals/owl.gif', sound: 'sounds/animals/owl.mp3'}, {text1: 'oyster', text2: 'ostra',image: 'images/animals/oyster.gif', sound: 'sounds/animals/oyster.mp3'}, {text1: 'parrot', text2: 'loro',image: 'images/animals/parrot.gif', sound: 'sounds/animals/parrot.mp3'}, {text1: 'peacock', text2: 'pavo real',image: 'images/animals/peacock.gif', sound: 'sounds/animals/peacock.mp3'}, {text1: 'pheasant', text2: 'faisán',image: 'images/animals/pheasant.gif', sound: 'sounds/animals/pheasant.mp3'}, {text1: 'pig', text2: 'cerdo',image: 'images/animals/pig.gif', sound: 'sounds/animals/pig.mp3'}, {text1: 'pigeon', text2: 'paloma',image: 'images/animals/pigeon.gif', sound: 'sounds/animals/pigeon.mp3'}, {text1: 'pike', text2: 'lucio',image: 'images/animals/pike.gif', sound: 'sounds/animals/pike.mp3'}, {text1: 'rabbit', text2: 'conejo',image: 'images/animals/rabbit.gif', sound: 'sounds/animals/rabbit.mp3'}, {text1: 'rat', text2: 'rata',image: 'images/animals/rat.gif', sound: 'sounds/animals/rat.mp3'}, {text1: 'robin', text2: 'robin',image: 'images/animals/robin.gif', sound: 'sounds/animals/robin.mp3'}
// ]
// words =[{text1: 'ant', text2: 'hormiga',image: 'images/animals/ant.gif', sound: 'sounds/animals/ant.mp3'}, {text1: 'bat', text2: 'murciélago',image: 'images/animals/bat.gif', sound: 'sounds/animals/bat.mp3'}, {text1: 'bee', text2: 'abeja',image: 'images/animals/bee.gif', sound: 'sounds/animals/bee.mp3'}, {text1: 'bull', text2: 'toro',image: 'images/animals/bull.png', sound: 'sounds/animals/bull.mp3'}, {text1: 'butterfly', text2: 'mariposa',image: 'images/animals/butterfly.gif', sound: 'sounds/animals/butterfly.mp3'}, {text1: 'canary', text2: 'canario',image: 'images/animals/canary.gif', sound: 'sounds/animals/canary.mp3'}, {text1: 'cat', text2: 'gato',image: 'images/animals/cat.png', sound: 'sounds/animals/cat.mp3'}, {text1: 'chicken', text2: 'pollo',image: 'images/animals/chicken.gif', sound: 'sounds/animals/chicken.mp3'}, {text1: 'cow', text2: 'vaca',image: 'images/animals/cow.gif', sound: 'sounds/animals/cow.mp3'}, {text1: 'crab', text2: 'cangrejo',image: 'images/animals/crab.gif', sound: 'sounds/animals/crab.mp3'}, {text1: 'crow', text2: 'cuervo',image: 'images/animals/crow.jpg', sound: 'sounds/animals/crow.mp3'}, {text1: 'deer', text2: 'ciervo',image: 'images/animals/deer.gif', sound: 'sounds/animals/deer.mp3'}, {text1: 'dog', text2: 'perro',image: 'images/animals/dog.png', sound: 'sounds/animals/dog.mp3'}, {text1: 'dolphin', text2: 'delfin',image: 'images/animals/dolphin.png', sound: 'sounds/animals/dolphin.mp3'}, {text1: 'donkey', text2: 'burro',image: 'images/animals/donkey.gif', sound: 'sounds/animals/donkey.mp3'}, {text1: 'dove', text2: 'paloma',image: 'images/animals/dove.gif', sound: 'sounds/animals/dove.mp3'}, {text1: 'dragonfly', text2: 'libélula',image: 'images/animals/dragonfly.gif', sound: 'sounds/animals/dragonfly.mp3'}, {text1: 'duck', text2: 'pato',image: 'images/animals/duck.gif', sound: 'sounds/animals/duck.mp3'}, {text1: 'fish', text2: 'pescado',image: 'images/animals/fish.gif', sound: 'sounds/animals/fish.mp3'}, {text1: 'fly', text2: 'mosca',image: 'images/animals/fly.gif', sound: 'sounds/animals/fly.mp3'}, {text1: 'fox', text2: 'zorro',image: 'images/animals/fox.gif', sound: 'sounds/animals/fox.mp3'}, {text1: 'frog', text2: 'rana',image: 'images/animals/frog.gif', sound: 'sounds/animals/frog.mp3'}, {text1: 'goat', text2: 'cabra',image: 'images/animals/goat.gif', sound: 'sounds/animals/goat.mp3'}, {text1: 'goldfish', text2: 'pez de colores',image: 'images/animals/goldfish.gif', sound: 'sounds/animals/goldfish.mp3'}, {text1: 'goose', text2: 'ganso',image: 'images/animals/goose.gif', sound: 'sounds/animals/goose.mp3'}, {text1: 'guinea pig', text2: 'conejillo de indias',image: 'images/animals/guinea_pig.gif', sound: 'sounds/animals/guinea_pig.mp3'}, {text1: 'hamster', text2: 'hámster',image: 'images/animals/hamster.gif', sound: 'sounds/animals/hamster.mp3'}, {text1: 'hare', text2: 'liebre',image: 'images/animals/hare.gif', sound: 'sounds/animals/hare.mp3'}, {text1: 'hawk', text2: 'halcón',image: 'images/animals/hawk.gif', sound: 'sounds/animals/hawk.mp3'}, {text1: 'hedgehog', text2: 'erizo',image: 'images/animals/hedgehog.png', sound: 'sounds/animals/hedgehog.mp3'}, {text1: 'heron', text2: 'garza',image: 'images/animals/heron.gif', sound: 'sounds/animals/heron.mp3'}, {text1: 'horse', text2: 'caballo',image: 'images/animals/horse.gif', sound: 'sounds/animals/horse.mp3'}, {text1: 'kingfisher', text2: 'martín pescador',image: 'images/animals/kingfisher.gif', sound: 'sounds/animals/kingfisher.mp3'}, {text1: 'lion', text2: 'leon',image: 'images/animals/lion.png', sound: 'sounds/animals/lion.mp3'}, {text1: 'lobster', text2: 'langosta',image: 'images/animals/lobster.gif', sound: 'sounds/animals/lobster.mp3'}, {text1: 'mole', text2: 'topo',image: 'images/animals/mole.gif', sound: 'sounds/animals/mole.mp3'}, {text1: 'mosquito', text2: 'mosquito',image: 'images/animals/mosquito.jpg', sound: 'sounds/animals/mosquito.mp3'}, {text1: 'moth', text2: 'polilla',image: 'images/animals/moth.gif', sound: 'sounds/animals/moth.mp3'}, {text1: 'mouse', text2: 'ratón',image: 'images/animals/mouse.jpg', sound: 'sounds/animals/mouse.mp3'}, {text1: 'mussel', text2: 'mejillón',image: 'images/animals/mussel.jpg', sound: 'sounds/animals/mussel.mp3'}, {text1: 'otter', text2: 'nutria',image: 'images/animals/otter.gif', sound: 'sounds/animals/otter.mp3'}, {text1: 'owl', text2: 'búho',image: 'images/animals/owl.png', sound: 'sounds/animals/owl.mp3'}, {text1: 'oyster', text2: 'ostra',image: 'images/animals/oyster.gif', sound: 'sounds/animals/oyster.mp3'}, {text1: 'parrot', text2: 'loro',image: 'images/animals/parrot.gif', sound: 'sounds/animals/parrot.mp3'}, {text1: 'peacock', text2: 'pavo real',image: 'images/animals/peacock.gif', sound: 'sounds/animals/peacock.mp3'}, {text1: 'pheasant', text2: 'faisán',image: 'images/animals/pheasant.gif', sound: 'sounds/animals/pheasant.mp3'}, {text1: 'pig', text2: 'cerdo',image: 'images/animals/pig.gif', sound: 'sounds/animals/pig.mp3'}, {text1: 'pigeon', text2: 'paloma',image: 'images/animals/pigeon.gif', sound: 'sounds/animals/pigeon.mp3'}, {text1: 'rabbit', text2: 'conejo',image: 'images/animals/rabbit.gif', sound: 'sounds/animals/rabbit.mp3'}, {text1: 'rat', text2: 'rata',image: 'images/animals/rat.gif', sound: 'sounds/animals/rat.mp3'}, {text1: 'sheep', text2: 'oveja',image: 'images/animals/sheep.png', sound: 'sounds/animals/sheep.mp3'}, {text1: 'snail', text2: 'caracol',image: 'images/animals/snail.gif', sound: 'sounds/animals/snail.mp3'}, {text1: 'snake', text2: 'serpiente',image: 'images/animals/snake.gif', sound: 'sounds/animals/snake.mp3'}, {text1: 'squirrel', text2: 'ardilla',image: 'images/animals/squirrel.gif', sound: 'sounds/animals/squirrel.mp3'}, {text1: 'swan', text2: 'cisne',image: 'images/animals/swan.png', sound: 'sounds/animals/swan.mp3'}, {text1: 'whale', text2: 'ballena',image: 'images/animals/whale.png', sound: 'sounds/animals/whale.mp3'}, {text1: 'zebra', text2: 'cebra',image: 'images/animals/zebra.png', sound: 'sounds/animals/zebra.mp3'}
// ]
words =[{text1: 'ant', text2: 'hormiga',image: 'images/animals/ant.png', sound: 'sounds/animals/ant.mp3'}, {text1: 'bat', text2: 'murciélago',image: 'images/animals/bat.png', sound: 'sounds/animals/bat.mp3'}, {text1: 'bear', text2: 'oso',image: 'images/animals/bear.png', sound: 'sounds/animals/bear.mp3'}, {text1: 'bee', text2: 'abeja',image: 'images/animals/bee.png', sound: 'sounds/animals/bee.mp3'}, {text1: 'bull', text2: 'toro',image: 'images/animals/bull.png', sound: 'sounds/animals/bull.mp3'}, {text1: 'butterfly', text2: 'mariposa',image: 'images/animals/butterfly.png', sound: 'sounds/animals/butterfly.mp3'}, {text1: 'camel', text2: 'camello',image: 'images/animals/camel.png', sound: 'sounds/animals/camel.mp3'}, {text1: 'cat', text2: 'gato',image: 'images/animals/cat.png', sound: 'sounds/animals/cat.mp3'}, {text1: 'caterpillar', text2: 'oruga',image: 'images/animals/caterpillar.png', sound: 'sounds/animals/caterpillar.mp3'}, {text1: 'chicken', text2: 'pollo',image: 'images/animals/chicken.png', sound: 'sounds/animals/chicken.mp3'}, {text1: 'cow', text2: 'vaca',image: 'images/animals/cow.png', sound: 'sounds/animals/cow.mp3'}, {text1: 'crab', text2: 'cangrejo',image: 'images/animals/crab.png', sound: 'sounds/animals/crab.mp3'}, {text1: 'crocodile', text2: 'cocodrilo',image: 'images/animals/crocodile.png', sound: 'sounds/animals/crocodile.mp3'}, {text1: 'deer', text2: 'ciervo',image: 'images/animals/deer.png', sound: 'sounds/animals/deer.mp3'}, {text1: 'dog', text2: 'perro',image: 'images/animals/dog.png', sound: 'sounds/animals/dog.mp3'}, {text1: 'dolphin', text2: 'delfin',image: 'images/animals/dolphin.png', sound: 'sounds/animals/dolphin.mp3'}, {text1: 'donkey', text2: 'burro',image: 'images/animals/donkey.png', sound: 'sounds/animals/donkey.mp3'}, {text1: 'duck', text2: 'pato',image: 'images/animals/duck.png', sound: 'sounds/animals/duck.mp3'}, {text1: 'elephant', text2: 'elefante',image: 'images/animals/elephant.png', sound: 'sounds/animals/elephant.mp3'}, {text1: 'fish', text2: 'pescado',image: 'images/animals/fish.png', sound: 'sounds/animals/fish.mp3'}, {text1: 'fly', text2: 'mosca',image: 'images/animals/fly.png', sound: 'sounds/animals/fly.mp3'}, {text1: 'fox', text2: 'zorro',image: 'images/animals/fox.png', sound: 'sounds/animals/fox.mp3'}, {text1: 'frog', text2: 'rana',image: 'images/animals/frog.png', sound: 'sounds/animals/frog.mp3'}, {text1: 'giraffe', text2: 'jirafa',image: 'images/animals/giraffe.png', sound: 'sounds/animals/giraffe.mp3'}, {text1: 'goat', text2: 'cabra',image: 'images/animals/goat.png', sound: 'sounds/animals/goat.mp3'}, {text1: 'goldfish', text2: 'pez de colores',image: 'images/animals/goldfish.png', sound: 'sounds/animals/goldfish.mp3'}, {text1: 'hippo', text2: 'hipopotamo',image: 'images/animals/hippo.png', sound: 'sounds/animals/hippo.mp3'}, {text1: 'horse', text2: 'caballo',image: 'images/animals/horse.png', sound: 'sounds/animals/horse.mp3'}, {text1: 'kangaroo', text2: 'canguro',image: 'images/animals/kangaroo.png', sound: 'sounds/animals/kangaroo.mp3'}, {text1: 'killer whale', text2: 'orca',image: 'images/animals/killer_whale.png', sound: 'sounds/animals/killer_whale.mp3'}, {text1: 'koala', text2: 'koala',image: 'images/animals/koala.png', sound: 'sounds/animals/koala.mp3'}, {text1: 'ladybug', text2: 'vaquita de san antonio',image: 'images/animals/ladybug.png', sound: 'sounds/animals/ladybug.mp3'}, {text1: 'lion', text2: 'leon',image: 'images/animals/lion.png', sound: 'sounds/animals/lion.mp3'}, {text1: 'lobster', text2: 'langosta',image: 'images/animals/lobster.png', sound: 'sounds/animals/lobster.mp3'}, {text1: 'monkey', text2: 'mono',image: 'images/animals/monkey.png', sound: 'sounds/animals/monkey.mp3'}, {text1: 'mosquito', text2: 'mosquito',image: 'images/animals/mosquito.png', sound: 'sounds/animals/mosquito.mp3'}, {text1: 'mouse', text2: 'ratón',image: 'images/animals/mouse.png', sound: 'sounds/animals/mouse.mp3'}, {text1: 'octopus', text2: 'pulpo',image: 'images/animals/octopus.png', sound: 'sounds/animals/octopus.mp3'}, {text1: 'owl', text2: 'búho',image: 'images/animals/owl.png', sound: 'sounds/animals/owl.mp3'}, {text1: 'panther', text2: 'pantera',image: 'images/animals/panther.png', sound: 'sounds/animals/panther.mp3'}, {text1: 'parrot', text2: 'loro',image: 'images/animals/parrot.png', sound: 'sounds/animals/parrot.mp3'}, {text1: 'penguin', text2: 'pingüino',image: 'images/animals/penguin.png', sound: 'sounds/animals/penguin.mp3'}, {text1: 'pig', text2: 'cerdo',image: 'images/animals/pig.png', sound: 'sounds/animals/pig.mp3'}, {text1: 'polar bear', text2: 'oso polar',image: 'images/animals/polar_bear.png', sound: 'sounds/animals/polar_bear.mp3'}, {text1: 'rabbit', text2: 'conejo',image: 'images/animals/rabbit.png', sound: 'sounds/animals/rabbit.mp3'}, {text1: 'seal', text2: 'foca',image: 'images/animals/seal.png', sound: 'sounds/animals/seal.mp3'}, {text1: 'shark', text2: 'tiburon',image: 'images/animals/shark.png', sound: 'sounds/animals/shark.mp3'}, {text1: 'sheep', text2: 'oveja',image: 'images/animals/sheep.png', sound: 'sounds/animals/sheep.mp3'}, {text1: 'snail', text2: 'caracol',image: 'images/animals/snail.png', sound: 'sounds/animals/snail.mp3'}, {text1: 'snake', text2: 'serpiente',image: 'images/animals/snake.png', sound: 'sounds/animals/snake.mp3'}, {text1: 'squirrel', text2: 'ardilla',image: 'images/animals/squirrel.png', sound: 'sounds/animals/squirrel.mp3'}, {text1: 'swan', text2: 'cisne',image: 'images/animals/swan.png', sound: 'sounds/animals/swan.mp3'}, {text1: 'tiger', text2: 'tigre',image: 'images/animals/tiger.png', sound: 'sounds/animals/tiger.mp3'}, {text1: 'turtle', text2: 'tortuga',image: 'images/animals/turtle.png', sound: 'sounds/animals/turtle.mp3'}, {text1: 'whale', text2: 'ballena',image: 'images/animals/whale.png', sound: 'sounds/animals/whale.mp3'}, {text1: 'wolf', text2: 'lobo',image: 'images/animals/wolf.png', sound: 'sounds/animals/wolf.mp3'}, {text1: 'zebra', text2: 'cebra',image: 'images/animals/zebra.png', sound: 'sounds/animals/zebra.mp3'}
]
//clothes
// words =[{text1: 'belt', text2: 'cinturon',image: 'images/clothes/belt.gif', sound: 'sounds/clothes/belt.mp3'}, {text1: 'beret', text2: 'boina',image: 'images/clothes/beret.gif', sound: 'sounds/clothes/beret.mp3'}, {text1: 'bikini', text2: 'bikini',image: 'images/clothes/bikini.jpg', sound: 'sounds/clothes/bikini.mp3'}, {text1: 'blouse', text2: 'blusa',image: 'images/clothes/blouse.jpg', sound: 'sounds/clothes/blouse.mp3'}, {text1: 'boots', text2: 'botas',image: 'images/clothes/boots.jpg', sound: 'sounds/clothes/boots.mp3'}, {text1: 'bowler hat', text2: 'bombin',image: 'images/clothes/bowler_hat.jpg', sound: 'sounds/clothes/bowler_hat.mp3'}, {text1: 'boxers', text2: 'boxers',image: 'images/clothes/boxers.jpg', sound: 'sounds/clothes/boxers.mp3'}, {text1: 'bra', text2: 'sosten',image: 'images/clothes/bra.jpg', sound: 'sounds/clothes/bra.mp3'}, {text1: 'bracelet', text2: 'pulsera',image: 'images/clothes/bracelet.gif', sound: 'sounds/clothes/bracelet.mp3'}, {text1: 'briefs', text2: 'calzoncillos',image: 'images/clothes/briefs.jpg', sound: 'sounds/clothes/briefs.mp3'}, {text1: 'cap', text2: 'gorra',image: 'images/clothes/cap.jpg', sound: 'sounds/clothes/cap.mp3'}, {text1: 'cardigan', text2: 'cardigan',image: 'images/clothes/cardigan.jpg', sound: 'sounds/clothes/cardigan.mp3'}, {text1: 'coat', text2: 'saco',image: 'images/clothes/coat.jpg', sound: 'sounds/clothes/coat.mp3'}, {text1: 'dress', text2: 'vestido',image: 'images/clothes/dress.jpg', sound: 'sounds/clothes/dress.mp3'}, {text1: 'dressing gown', text2: 'bata',image: 'images/clothes/dressing_gown.jpg', sound: 'sounds/clothes/dressing_gown.mp3'}, {text1: 'earring', text2: 'aro',image: 'images/clothes/earring.gif', sound: 'sounds/clothes/earring.mp3'}, {text1: 'glasses', text2: 'anteojos',image: 'images/clothes/glasses.gif', sound: 'sounds/clothes/glasses.mp3'}, {text1: 'gloves', text2: 'guantes',image: 'images/clothes/gloves.gif', sound: 'sounds/clothes/gloves.mp3'}, {text1: 'handbag', text2: 'cartera',image: 'images/clothes/handbag.gif', sound: 'sounds/clothes/handbag.mp3'}, {text1: 'hanger', text2: 'percha',image: 'images/clothes/hanger.gif', sound: 'sounds/clothes/hanger.mp3'}, {text1: 'hat', text2: 'sombrero',image: 'images/clothes/hat.gif', sound: 'sounds/clothes/hat.mp3'}, {text1: 'headscarf', text2: 'pañuelo',image: 'images/clothes/headscarf.gif', sound: 'sounds/clothes/headscarf.mp3'}, {text1: 'hoodie', text2: 'buzo',image: 'images/clothes/hoodie.jpg', sound: 'sounds/clothes/hoodie.mp3'}, {text1: 'jacket', text2: 'campera',image: 'images/clothes/jacket.jpg', sound: 'sounds/clothes/jacket.mp3'}, {text1: 'jean', text2: 'jean',image: 'images/clothes/jean.jpg', sound: 'sounds/clothes/jean.mp3'}, {text1: 'jumper', text2: 'pullover',image: 'images/clothes/jumper.jpg', sound: 'sounds/clothes/jumper.mp3'}, {text1: 'knitted hat', text2: 'gorro de lana',image: 'images/clothes/knitted_hat.jpg', sound: 'sounds/clothes/knitted_hat.mp3'}, {text1: 'mittens', text2: 'mitones',image: 'images/clothes/mittens.gif', sound: 'sounds/clothes/mittens.mp3'}, {text1: 'nappy', text2: 'pañal',image: 'images/clothes/nappy.jpg', sound: 'sounds/clothes/nappy.mp3'}, {text1: 'necklace', text2: 'collar',image: 'images/clothes/necklace.gif', sound: 'sounds/clothes/necklace.mp3'}, {text1: 'nightdress', text2: 'camison',image: 'images/clothes/nightdress.jpg', sound: 'sounds/clothes/nightdress.mp3'}, {text1: 'panties', text2: 'bombacha',image: 'images/clothes/panties.jpg', sound: 'sounds/clothes/panties.mp3'}, {text1: 'pyjama', text2: 'pijama',image: 'images/clothes/pyjama.jpg', sound: 'sounds/clothes/pyjama.mp3'}, {text1: 'ring', text2: 'anillo',image: 'images/clothes/ring.gif', sound: 'sounds/clothes/ring.mp3'}, {text1: 'romper suit', text2: 'mameluco',image: 'images/clothes/romper_suit.jpg', sound: 'sounds/clothes/romper_suit.mp3'}, {text1: 'sandals', text2: 'sandalias',image: 'images/clothes/sandals.jpg', sound: 'sounds/clothes/sandals.mp3'}, {text1: 'scarf', text2: 'bufanda',image: 'images/clothes/scarf.gif', sound: 'sounds/clothes/scarf.mp3'}, {text1: 'shirt', text2: 'camisa',image: 'images/clothes/shirt.jpg', sound: 'sounds/clothes/shirt.mp3'}, {text1: 'shoes', text2: 'zapatos',image: 'images/clothes/shoes.jpg', sound: 'sounds/clothes/shoes.mp3'}, {text1: 'short', text2: 'short',image: 'images/clothes/short.jpg', sound: 'sounds/clothes/short.mp3'}, {text1: 'skirt', text2: 'pollera',image: 'images/clothes/skirt.jpg', sound: 'sounds/clothes/skirt.mp3'}, {text1: 'slippers', text2: 'pantuflas',image: 'images/clothes/slippers.jpg', sound: 'sounds/clothes/slippers.mp3'}, {text1: 'socks', text2: 'medias',image: 'images/clothes/socks.jpg', sound: 'sounds/clothes/socks.mp3'}, {text1: 'stockings', text2: 'medias de nylon',image: 'images/clothes/stockings.jpg', sound: 'sounds/clothes/stockings.mp3'}, {text1: 'suit', text2: 'traje',image: 'images/clothes/suit.jpg', sound: 'sounds/clothes/suit.mp3'}, {text1: 'sunglasses', text2: 'anteojos de sol',image: 'images/clothes/sunglasses.gif', sound: 'sounds/clothes/sunglasses.mp3'}, {text1: 'swimming trunks', text2: 'short de baño',image: 'images/clothes/swimming_trunks.jpg', sound: 'sounds/clothes/swimming_trunks.mp3'}, {text1: 'swimsuit', text2: 'malla (de mujer)',image: 'images/clothes/swimsuit.jpg', sound: 'sounds/clothes/swimsuit.mp3'}, {text1: 'tanktop', text2: 'camiseta',image: 'images/clothes/tanktop.jpg', sound: 'sounds/clothes/tanktop.mp3'}, {text1: 'tie', text2: 'corbata',image: 'images/clothes/tie.gif', sound: 'sounds/clothes/tie.mp3'}, {text1: 'tights', text2: 'medias largas',image: 'images/clothes/tights.jpg', sound: 'sounds/clothes/tights.mp3'}, {text1: 'trilby', text2: 'sombrero de terciopelo',image: 'images/clothes/trilby.jpg', sound: 'sounds/clothes/trilby.mp3'}, {text1: 'trousers', text2: 'pantalones (uk)',image: 'images/clothes/trousers.jpg', sound: 'sounds/clothes/trousers.mp3'}, {text1: 't-shirt', text2: 'remera',image: 'images/clothes/t-shirt.jpg', sound: 'sounds/clothes/t-shirt.mp3'}, {text1: 'vest', text2: 'chaleco',image: 'images/clothes/vest.jpg', sound: 'sounds/clothes/vest.mp3'}, {text1: 'watch', text2: 'reloj',image: 'images/clothes/watch.gif', sound: 'sounds/clothes/watch.mp3'}, {text1: 'wellingtons', text2: 'botas de goma',image: 'images/clothes/wellingtons.jpg', sound: 'sounds/clothes/wellingtons.mp3'}
// ]

const discardCardDrawn = Array.from(document.querySelectorAll('.discardCardWord'))
const playerCardTopDrawn = document.querySelector('#playerCardTop')
const playerCardDrawn = Array.from(document.querySelectorAll('.playerCardWord')) //card as array
const helpButtonDrawn = document.querySelector('#helpButton')
const seeWordsButtonDrawn = document.querySelector('#seeWordsButton')
const playerPointsDrawn=document.querySelector('#playerPoints')
const timeDrawn=document.querySelector('#time')
const newGameButtonDrawn=document.querySelector('#newGame')
const wordListDrawn=document.querySelector('#wordList')
const wordListTableDrawn=document.querySelector('#wordListTable')
const gameDrawn=document.querySelector('#game')
let playerPoints = 0
let cardsCount = 0
const TIMEGAME = 120
let time = TIMEGAME
let playing = false
let timerId = null
// const match=document.querySelector('#match')
// match.innerHTML =''

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
        shuffleArray(cards[i])
    }
}
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

function drawDiscardCard(cardNumber,cant,position){
    for(let i=0;i<8;i++){
        discardCardDrawn[i].classList.remove("smaller")
        if(cant==1){
            discardCardDrawn[i].innerHTML=''
            // discardCardDrawn[i].classList.remove("smaller")
            //even cards with drawings
            if (cardsCount%2==0){
                let picture = document.createElement("img")
                picture.src = words[cards[cardNumber][i]].image 
                picture.alt = words[cards[cardNumber][i]].text1 
                discardCardDrawn[i].appendChild(picture)
            }else{
                discardCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            }
        }else{
            if(i==position){
                discardCardDrawn[i].innerHTML=''
                discardCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
                + " <br/> "+words[cards[cardNumber][i]].text2 
                let picture = document.createElement("img")
                picture.src = words[cards[cardNumber][i]].image 
                picture.alt = words[cards[cardNumber][i]].text1 
                discardCardDrawn[i].appendChild(picture)
                discardCardDrawn[i].classList.add("smaller")
            }else{
                // discardCardDrawn[i].innerHTML=''
                // discardCardDrawn[i].classList.remove("smaller")
                // if (cardsCount%2==0){
                //     let picture = document.createElement("img")
                //     picture.src = words[cards[cardNumber][i]].image 
                //     picture.alt = words[cards[cardNumber][i]].text1 
                //     discardCardDrawn[i].appendChild(picture)
                // }else{
                //     discardCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
                // }
            }
            // discardCardDrawn[i].innerHTML=''
            // discardCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            // + " <br/> "+words[cards[cardNumber][i]].text2 
            // let picture = document.createElement("img")
            // picture.src = words[cards[cardNumber][i]].image 
            // picture.alt = words[cards[cardNumber][i]].text1 
            // discardCardDrawn[i].appendChild(picture)
            // discardCardDrawn[i].classList.add("smaller")
        }

    }
    cardsCount++
}
function drawPlayerCard(cardNumber,cant,position){
    for(let i=0;i<8;i++){
        playerCardDrawn[i].classList.remove("smaller")
        if(cant==1){

            playerCardDrawn[i].innerHTML=''
            // playerCardDrawn[i].classList.remove("smaller")
            //even cards with drawings
            if (cardsCount%2==0){
                let picture = document.createElement("img")
                picture.src = words[cards[cardNumber][i]].image 
                picture.alt = words[cards[cardNumber][i]].text1 
                playerCardDrawn[i].appendChild(picture)
            }else{
                playerCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
            }


        }else{
            if(i==position){
                playerCardDrawn[i].innerHTML=''
                playerCardDrawn[i].innerHTML=words[cards[cardNumber][i]].text1 
                + " <br/> "+words[cards[cardNumber][i]].text2 
                let picture = document.createElement("img")
                picture.src = words[cards[cardNumber][i]].image 
                picture.alt = words[cards[cardNumber][i]].text1 
                playerCardDrawn[i].appendChild(picture)
                playerCardDrawn[i].classList.add("smaller")
            }else{

            }
        }
    }
}

createCards()

discardCard = Math.floor(Math.random()*57)
drawDiscardCard(discardCard,1,0)

// habria dos maneras o reparto las cartas Reales o cada vez saco una al azar con repeticion
// voy a hacerlo con repeticion
playerCard = Math.floor(Math.random()*57)
drawPlayerCard(playerCard,1,0)

function timeUpdate(){
    if(time>0){
        time--
        timeDrawn.innerHTML = time
    }else if (playing){
        clearInterval(timerId)
        playing = false
        playerCardDrawn.forEach(x=>x.removeEventListener('click',checkWord))
        let seguir=confirm("GAME OVER"+"\nTotal Points: "+ playerPoints+"\n\nPlay Again?")
        if(seguir){
            newGame()
        }
    }
}

function newGame(){
    cardsCount = 0
    playerPoints = 0
    playerPointsDrawn.innerHTML = playerPoints
    time = TIMEGAME
    timeDrawn.innerHTML = time
    timerId=setInterval(timeUpdate, 1000);
    playing = true
    createCards()
    discardCard = Math.floor(Math.random()*57)
    drawDiscardCard(discardCard,1,0)
    playerCard = Math.floor(Math.random()*57)
    drawPlayerCard(playerCard,1,0)
    playerCardDrawn.forEach(x=>x.addEventListener('click',checkWord))

    //if the list of words is showing, we hide it
    if(! wordListDrawn.classList.contains('hidden')){
        wordListDrawn.classList.add('hidden')
        gameDrawn.classList.remove('hidden')
        seeWordsButtonDrawn.innerHTML="See Words"
    }
}

function checkWord(e){
    if( cards[discardCard].includes(cards[playerCard][e.currentTarget.dataset.pcid]) ){
        let place = e.currentTarget.dataset.pcid
        playerCardDrawn[place].classList.add('matched')
        let aux = cards[discardCard].indexOf(cards[playerCard][place])
        discardCardDrawn[aux].classList.add('matched')
        setTimeout(()=>playerCardDrawn[place].classList.remove('matched'), 1000);
        setTimeout(()=>discardCardDrawn[aux].classList.remove('matched'),1000);
        setTimeout(()=>playerCardTopDrawn.classList.add('wonCard'),1000);
        setTimeout(()=>playerCardTopDrawn.classList.remove('wonCard'),2000);
        playerPoints +=10
        playerPointsDrawn.innerHTML = playerPoints
        discardCard = playerCard
        playerCard = Math.floor(Math.random()*57)
        setTimeout(()=>drawDiscardCard(discardCard,1,0), 2000);
        setTimeout(()=>drawPlayerCard(playerCard,1,0), 2000);

    }else{
        playerPoints -=5
        playerPointsDrawn.innerHTML = playerPoints
    }

}
function playerCardPlay(e){
    if(playing){
        let audio = new Audio(words[cards[playerCard][e.currentTarget.dataset.pcid]].sound);
        audio.volume = 0.2;
        audio.play();
    } else {
        alert("Click Play button to play. \nYou must find and click on the item in your card that matches the card in the discard deck.");
    }
}
function discardCardPlay(e){
    if(playing){
        let audio = new Audio(words[cards[discardCard][e.currentTarget.dataset.dcid]].sound);
        audio.volume = 0.2;
        audio.play();
    } else {
        alert("Click Play button to play. \nYou must find and click on the item in your card that matches the card in the discard deck.");
    }
}

// ---------Event Listeners-----------------
playerCardDrawn.forEach(x=>x.addEventListener('click',playerCardPlay))
discardCardDrawn.forEach(x=>x.addEventListener('click',discardCardPlay))
helpButtonDrawn.addEventListener('click',()=>window.location.href='help.html')
seeWordsButtonDrawn.addEventListener('click',drawWordList)

playerCardDrawn.forEach(x=>x.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    drawPlayerCard(playerCard,2,e.currentTarget.dataset.pcid)
    playerCardPlay(e)
    setTimeout(()=>drawPlayerCard(playerCard,1,0), 1000);
    return false;
}, false))

discardCardDrawn.forEach(x=>x.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    drawDiscardCard(discardCard,2,e.currentTarget.dataset.dcid)
    discardCardPlay(e)
    setTimeout(()=>drawDiscardCard(discardCard,1,0), 1000);
    return false;
}, false))

newGameButtonDrawn.addEventListener('click',()=>newGame())


// ---------Draw Word List--------------------
function drawWordList(){

    if(wordListDrawn.classList.contains('hidden')){
        for(let i=0;i<words.length;i++){
    
            let div = document.createElement("div")
            let text1Drawn = document.createElement("div")
            let text2Drawn = document.createElement("div")
            let pictureDivDrawn = document.createElement("div")
            let pictureDrawn = document.createElement("img")
            text1Drawn.innerHTML=words[i].text1 
            text2Drawn.innerHTML=words[i].text2
            pictureDrawn.src = words[i].image 
            pictureDrawn.alt = words[i].text1
            pictureDivDrawn.appendChild(pictureDrawn)
            div.appendChild(text1Drawn)
            div.appendChild(text2Drawn)
            div.appendChild(pictureDivDrawn)
    
            let audio = new Audio(words[i].sound);
            audio.volume = 0.2;
            div.addEventListener('click',()=>audio.play());

            wordListTableDrawn.appendChild(div)
        }
        wordListDrawn.classList.remove('hidden')
        gameDrawn.classList.add('hidden')
        seeWordsButtonDrawn.innerHTML="Back to Main"
    }else{
        wordListDrawn.classList.add('hidden')
        gameDrawn.classList.remove('hidden')
        seeWordsButtonDrawn.innerHTML="See Words"
    }
}