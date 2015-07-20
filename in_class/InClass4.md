Private data through scope
==========================

Evaluate by hand the following programs and explain why they work

1.

        var i = 20;
        
        var f = function (){
            var i = 0;
            return function () {
                console.log(i);
            };
        }
        
        f();
        console.log(i);

2.

       function til100 () {
            var counter = 0;
            return function (num){
                counter = counter + num;
                if (counter >= 100){
                    console.log("We're done'");
                    return counter;
                }
            };
        }
        
        var increment = til100();
        
        increment(10);
        increment(50);
        increment(50);

Advanced closure examples
=========================

Execute the following program by hand, check your evaluation against the interpreter, and then answer the questions below as a group.

    function counterMaker (){
        var counter = 0;
        var counterHandler = function (op){
            if (op == "inc"){
                counter = counter+1;
            }
            else if (op == "dec") {
                counter = counter-1;
            }
            else if (op == "show") {
                console.log(counter);
            }
        }
        return counterHandler;
    } 
    
    var counter1 = counterMaker();
    var counter2 = counterMaker();
    
    counter1("inc");
    counter2("dec");
    counter1("show");
    counter2("show");


1.  why don&rsquo;t `counter1("inc")` and `counter2("dec")` cancel each other out?
2.  how would you add a new &ldquo;method&rdquo; to this &ldquo;counter&rdquo;? List the steps and compare with each other.
3.  following your own outline, add a new &ldquo;method&rdquo; called reset which sets the counter back to 0.
