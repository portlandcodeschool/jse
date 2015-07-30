var fruits  = {}
//undefined
fruits.pear
//undefined
pear
//ReferenceError: pear is not defined
var fruits  = { banana: 'yellow'}
//undefined
fruits
//Object { banana: "yellow" }
delete fruits.banana
//true
fruits
//Object {  }
fruits
//Object {  }
delete
//SyntaxError: expected expression, got end of script
delete fruits
//true
fruits
//ReferenceError: fruits is not defined
fruits.banana
//ReferenceError: fruits is not defined
var fruits = {banana:'yellow'}
//undefined
fruits.banana
//"yellow"
banana
//ReferenceError: banana is not defined
fruit['banana']
//ReferenceError: fruit is not defined
fruits['banana']
//"yellow"
fruits.12
//SyntaxError: missing ; before statement
fruits[12]
//undefined
fruits[12] = 'twelve'
//"twelve"
fruits
//Object { 12: "twelve", banana: "yellow" }
fruits.'abc'
//SyntaxError: missing name after . operator
fruits["'abc'"]
//undefined
fruits
//Object { 12: "twelve", banana: "yellow" }
fruits["'abc'"] = 'abc
//SyntaxError: unterminated string literal
fruits["'abc'"] = 'abc'
//"abc"
fruits
//Object { 12: "twelve", banana: "yellow", 'abc': "abc" }
fruits['abc']
//undefined
fruits.abc
//undefined
fruits["'abc'"]
//"abc"
typeof null
//"object"
typeof NaN
//"number"
if (null) 'hello'
//undefined
if ({}) 'hello'
//"hello"
var a={};
var b=a;
var c={a:a,b:b};
a.c = c;
var d=c.a;
delete c.a;
delete c.b;
a = null;
c = null;
null
d.c
//Object {  }
d.c.banana = 'yellow'
//"yellow"
b.c
//Object { banana: "yellow" }
Math.floor(1.3)
//1
Math.log(2)
//0.6931471805599453
