# ExerciseForSlice

题目链接: <https://golang.google.cn/tour/moretypes/18>

这是一道其中其中关于切片的练习题

## 题目如下

Implement Pic. It should return a slice of length dy, each element of which is a slice of dx 8-bit unsigned integers. When you run the program, it will display your picture, interpreting the integers as grayscale (well, bluescale) values.

The choice of image is up to you. Interesting functions include (x+y)/2, x*y, and x^y.

(You need to use a loop to allocate each []uint8 inside the [][]uint8.)

(Use uint8(intValue) to convert between types.)

## 解答

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