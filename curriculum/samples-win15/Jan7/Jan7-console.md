x=1
> 1
x = x+1
> 2
 x += 5
> 7
x
> 7
x %= 4
> 3
x
> 3
++x
> 4
x
> 4
--x
> 3
x
> 3
x++
> 3
x
> 4
1/2
> 0.5
2/1
> 2
1/0
> Infinity
Infinity
> Infinity
Infinity+1
> Infinity
Infinity*2
> Infinity
Infinity*-2
> -Infinity
-Infinity < -2349578234589
> true
typeof Infinity
> "number"
Number.isFinite(Infinity)
> false
Number.isFinite(-Infinity)
> false
Number.isFinite(2369836832468)
> true
Math.sqrt(4)
> 2
Math.sqrt(1)
> 1
Math.sqrt(-1)
> NaN
typeof NaN
> "number"
NaN === 1
> false
NaN === 0
> false
NaN === NaN
> false
NaN+1
> NaN
Number.isNaN(1)
> false
Number.isNaN(0)
> false
Number.isNaN(NaN)
> true
isNaN(1)
> false
isNaN(NaN)
> true
isNaN('apple')
> true
Number.isNaN('apple')
> false
if (1=='1') 'hello' 
> "hello"
if (1==='1') 'hello' 
> undefined
if (1==='1') sdgilnshfthkudfgjkhfgjkh
> undefined
if (1==='1') 15n
> SyntaxError: identifier starts immediately after numeric literal
> if (1<2) 'hello'
"hello"
> if (1) 'hello'
"hello"
> if (true) 'hello'
"hello"
> if ('1') 'hello'
"hello"
if ('0') 'hello'
> "hello"
(if (true) 'hello')
> SyntaxError: syntax error
if ('false') 'hello'
> "hello"
if ('0') 'hello'
> "hello"
var  widgetsNeeded =1;
> undefined
!1
> false
!0
> true
!''
> true
!(1 < 2 )
> false
if (!widgetsNeeded) blorg else 'hello' 
> SyntaxError: missing ; before statement
if (!widgetsNeeded) blorg; else 'hello' 
> "hello"
if (0) { if (1) 'hello' else basgo}
> SyntaxError: missing ; before statement
if (0) { if (1) 'hello'; else basgo}
> undefined
if ('a') { if (1) 'hello'; else basgo}
> "hello"
true && true
> true
true && false
> false
true || false
> true
false || true
> true
if ( x<10 && x>0) 'hello'
> "hello"
x
> 4
0 || 1
> 1
!0
> true
1 || 0
> 1
1 || asgkblasgkbafsgbjk
> 1
0  || sdklnsdfblnsbdkl
> ReferenceError: sdklnsdfblnsbdkl is not defined
0 && adfgjknagdfjk
> 0
1 && dfgndgfajklndfskln
> ReferenceError: dfgndgfajklndfskln is not defined
if (1) 'a'; else 'b';
> "a"
(if (1) 'a'; else 'b';)
> SyntaxError: syntax error
1 ? 'a' : 'b'
> "a"
(1 ? 'a' : 'b')
> "a"
(1 ? 'a' : 'b')+'pple'
> "apple"
(1 ? 'a' : 'b') ? true : false
> true
if (rainy) {
    accessory="umbrella";
    footwear="galoshes";
}
> ReferenceError: rainy is not defined
var rainy = true
> undefined
if (rainy) {
    accessory="umbrella";
    footwear="galoshes";
}
> "galoshes"
accessory
> "umbrella"
footwear
> "galoshes"
if (rainy) {
    accessory="umbrella";
}

> "umbrella"
1 ; 2
> 2
x
> 4
x = 1; 2
> 2
x
> 1
var x;
> undefined
y = var x;
> SyntaxError: syntax error
x = 7
> 7
y = x--
> 7
y
> 7
x
> 6
