# ExerciseForSlice

题目链接: <https://golang.google.cn/tour/moretypes/18>

说白了, 就是创建切片;

```go
package main

import "golang.org/x/tour/pic"

func Pic(dx, dy int) [][]uint8 {
	res := make([][]uint8, dx)
	for i := 0; i < dx; i++ {
		res[i] = make([]uint8, dy)
		for j := 0; j < dy; j++ {
			res[i][j] = uint8(i ** j)
		}
	}
	return res
}

func main() {
	pic.Show(Pic)
}

```