var x
undefined
(var x)
SyntaxError: expected expression, got keyword 'var'
var x = (1+1)
undefined
x+(if (true) 7)
SyntaxError: expected expression, got keyword 'if'
if (true) 7
7
x? 1: 2
1
(x? 1: 2)+1
2
(x? (false? 'a':'b'): 'c') 
"b"
0 Scratchpad/1:4:2
1 Scratchpad/1:4:2
2 Scratchpad/1:4:2
3 Scratchpad/1:4:2
4 Scratchpad/1:4:2
5 Scratchpad/1:4:2
6 Scratchpad/1:4:2
7 Scratchpad/1:4:2
8 Scratchpad/1:4:2
9 Scratchpad/1:4:2
0 Scratchpad/1:4:2
1 Scratchpad/1:4:2
2 Scratchpad/1:4:2
3 Scratchpad/1:4:2
4 Scratchpad/1:4:2
5 Scratchpad/1:4:2
6 Scratchpad/1:4:2
7 Scratchpad/1:4:2
8 Scratchpad/1:4:2
9 Scratchpad/1:4:2
"running" Scratchpad/1:7:5
0 Scratchpad/1:3:3
1 Scratchpad/1:3:3
2 Scratchpad/1:3:3
3 Scratchpad/1:3:3
4 Scratchpad/1:3:3
5 Scratchpad/1:3:3
6 Scratchpad/1:3:3
7 Scratchpad/1:3:3
8 Scratchpad/1:3:3
9 Scratchpad/1:3:3
0 Scratchpad/1:9:5
1 Scratchpad/1:9:5
2 Scratchpad/1:9:5
3 Scratchpad/1:9:5
4 Scratchpad/1:9:5
"It's five!" Scratchpad/1:6:9
6 Scratchpad/1:9:5
7 Scratchpad/1:9:5
var left = [(5+5)/2,8-4%4,!!true,(3+3)*7,x=('ice'+'cream'),('friends'>'waffles'>'work'),(3+4)*2]
undefined
left
Array [ 5, 8, true, 42, "icecream", false, 14 ]
left[1]
8
left[4]
"icecream"
var right = [66%8+'kittens',x<=x&&2,'meaning'+'of'+'life'==42,7*7%49,'hiking'&&'coffee'===true,'tobeerror'.substring(2,6),3+8%5,8/4||2]
undefined
right
Array [ "2kittens", 2, false, 0, false, "beer", 6, 2 ]
right[5]
"beer"
right.length
8
var emi = left.pop()
undefined
right.push(emi)
9
right.length
9
right[8]
14
var all = left.concat(right)
undefined
all.length
15
all[14]
14
left[0]
5
all[0]
5
left[0]=7
7
all[0]
5
1+right[5]
"1beer"
x
Array [ 3, 1 ]
x.length = 5
5
x
Array [ 3, 1, <3 empty slots> ]
x[2]
undefined
"0 : 1" Scratchpad/1:6:9
"2 : 3" Scratchpad/1:6:9
"4 : 5" Scratchpad/1:6:9
0 Scratchpad/1:13:3
1 Scratchpad/1:13:3
2 Scratchpad/1:13:3
3 Scratchpad/1:13:3
4 Scratchpad/1:13:3
5 Scratchpad/1:13:3
6 Scratchpad/1:13:3
7 Scratchpad/1:13:3
8 Scratchpad/1:13:3
9 Scratchpad/1:13:3
1 Scratchpad/1:3:3
3 Scratchpad/1:3:3
5 Scratchpad/1:3:3
7 Scratchpad/1:3:3
9 Scratchpad/1:3:3
1 Scratchpad/1:13:3
3 Scratchpad/1:13:3
5 Scratchpad/1:13:3
7 Scratchpad/1:13:3
9 Scratchpad/1:13:3
