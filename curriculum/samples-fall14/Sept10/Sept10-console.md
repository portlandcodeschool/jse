> 
```
"pass #0"
"pass #1"
"pass #2"
"pass #3"
"pass #4"
"pass #0" Scratchpad/1:5
"pass #1" Scratchpad/1:5
"pass #2" Scratchpad/1:5
"pass #3" Scratchpad/1:5
"pass #4" Scratchpad/1:5
```

prompt("Here is a prompt")
> "some tstuff"

alert("Here is an alert")
> undefined

who
> "(((((Elmo)))))"

alert(who)
> undefined

var who='Elmo';
for (var needHugs = 5; needHugs; needHugs--) {
	who = '('+who+')';
	alert(who);
}
who;
> "(((((Elmo)))))"
```
"Before = Elmo" Scratchpad/2:4
"After = (Elmo)" Scratchpad/2:8
"After = ((Elmo))" Scratchpad/2:8
"After = (((Elmo)))" Scratchpad/2:8
"After = ((((Elmo))))" Scratchpad/2:8
"After = (((((Elmo)))))" Scratchpad/2:8
```

hugElmo()
> undefined
```
"Before = Elmo" Scratchpad/2:4
"After = (Elmo)" Scratchpad/2:8
"After = ((Elmo))" Scratchpad/2:8
"After = (((Elmo)))" Scratchpad/2:8
"After = ((((Elmo))))" Scratchpad/2:8
"After = (((((Elmo)))))" Scratchpad/2:8
```

hugElmo()
> undefined
```
"Before = Elmo" Scratchpad/2:4
"After = (Elmo)" Scratchpad/2:8
"After = ((Elmo))" Scratchpad/2:8
"After = (((Elmo)))" Scratchpad/2:8
"After = ((((Elmo))))" Scratchpad/2:8
"After = (((((Elmo)))))" Scratchpad/2:8
```

var x;
> undefined

function fun() { 
var x = 1;
}
> undefined

x =0
> 0

x
> 0

fun()
> undefined

x
> 0

adfsgkljh
> ReferenceError: adfsgkljh is not defined

function fun() { 
var y = 1;
}
> undefined

var y = 0;
> undefined

y
> 0

fun()
> undefined

y
> 0

function fun() { 
   y = 1;
}
> undefined

y
> 0

fun()
> undefined

y
> 1

function fun() { 
   z = 1;
}
> undefined

fun()
> undefined

z
> 1

function fun() { 
   console.log(z);
}
> undefined

z
> 1

delete z
> true

z
> ReferenceError: z is not defined

fun()
> ReferenceError: z is not defined
```
> "After = (Elmo)" Scratchpad/2:10
> "After = ((Elmo))" Scratchpad/2:10
> "After = (((Elmo)))" Scratchpad/2:10
> "After = ((((Elmo))))" Scratchpad/2:10
> "After = (((((Elmo)))))" Scratchpad/2:10
```

who
> "(((((Elmo)))))"

hugElmo()
> undefined
```
> "After = ((((((Elmo))))))" Scratchpad/2:10
> "After = (((((((Elmo)))))))" Scratchpad/2:10
> "After = ((((((((Elmo))))))))" Scratchpad/2:10
> "After = (((((((((Elmo)))))))))" Scratchpad/2:10
> "After = ((((((((((Elmo))))))))))" Scratchpad/2:10
```

who
> "((((((((((Elmo))))))))))"

hugElmo()
> undefined
```
> "After = (((((((((((Elmo)))))))))))" Scratchpad/2:10
> "After = ((((((((((((Elmo))))))))))))" Scratchpad/2:10
> "After = (((((((((((((Elmo)))))))))))))" Scratchpad/2:10
> "After = ((((((((((((((Elmo))))))))))))))" Scratchpad/2:10
> "After = (((((((((((((((Elmo)))))))))))))))" Scratchpad/2:10
```

who
> "(((((((((((((((Elmo)))))))))))))))"
```
> "After = (Elmo)" Scratchpad/2:8
> "After = ((Elmo))" Scratchpad/2:8
> "After = (((Elmo)))" Scratchpad/2:8
> "After = ((((Elmo))))" Scratchpad/2:8
> "After = (((((Elmo)))))" Scratchpad/2:8
> "After = (Barney)" Scratchpad/2:8
> "After = ((Barney))" Scratchpad/2:8
> "After = (((Barney)))" Scratchpad/2:8
> "After = ((((Barney))))" Scratchpad/2:8
> "After = (((((Barney)))))" Scratchpad/2:8
```

delete who
> true

who
> ReferenceError: who is not defined

hugSomeone('Elmo')
> "(((((Elmo)))))"
```
> "After = (Elmo)" Scratchpad/2:9
> "After = ((Elmo))" Scratchpad/2:9
> "After = (((Elmo)))" Scratchpad/2:9
> "After = ((((Elmo))))" Scratchpad/2:9
> "After = (((((Elmo)))))" Scratchpad/2:9
```

hugSomeone('Elmo')
> "(((((Elmo)))))"

var elmo = 'Elmo';
> undefined

hugSomeone(elmo)
> "(((((Elmo)))))"

elmo
> "Elmo"

elmo = hugSomeone(elmo)
> "(((((Elmo)))))"

elmo
> "(((((Elmo)))))"

hugSomeone('Barney')
> "(((((Barney)))))"

hugSomeone(elmo)
> "((((((((((Elmo))))))))))"

var happyElmo = hugSomeone(elmo);
> undefined

happyElmo
> "((((((((((Elmo))))))))))"

hugSomeone(2)
> "(((((2)))))"

hugSomeone(false)
> "(((((false)))))"

print(1,2)
> "1"

print(1,2)
> "1"

print
> function ()

print(1,2)
> "1"

function print(n,d) {
  console.log('n=' + n + ' d=' + d);
}
> undefined

print(1,2)
> "1"

print(1,2)
> "1"

print(1,2);
> "1"

print(2,1);
> "2"

print('2','1');
> "2"

prnt(1,2)
> 0.5

prnt(1,2)
> undefined
```
"n=1 d=2" Scratchpad/2:4
```

prnt(1,2)
> undefined
```
"1/2" Scratchpad/2:4
```

prnt(1,2)
> "1/2"

var saveIt = prnt(1,2);
> undefined

saveIt
> "1/2"
