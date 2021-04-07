function calculate(form)
{
    var a = form.elements["aInput"].value;
    var b = form.elements["bInput"].value;
    var c = form.elements["cInput"].value;
    if(a==0 || a<-99 || a>99)
    {
        alert("Invalid for entry for a. Must be a non-zero integer between -99 and +99.");
    }
    else if(b<-99 || b>99)
    {
        alert("Invalid for entry for b. Must be am integer between -99 and +99.");
    }
    else if(c<-99 || c>99)
    {
        alert("Invalid for entry for c. Must be am integer between -99 and +99.");
    }
    else{
    quadraticAdd(a, b, c);
    }
}

function quadraticAdd(a,b,c){
    var posSolution;
    var b=b;
    var root;
    var bSqr=b*b;  //b squared
    var bTemp=b;
    if(b>0){
        bTemp=Math.abs(b)*-1;  // if b is positive, negate it
     }
     if(b<0){
        bTemp=Math.abs(b);  //if b is negative make it positive
     }
    root=bSqr-(4*a*c);  // everything under the square root
    if(root<0){
        document.getElementById("solution").innerHTML="The roots are imaginary"; //if its negative its imaginary
    }
    else if(root>=0){
        sqrt=Math.sqrt(root);       //find the square root
        sum=bTemp+sqrt;                 // add b
        divisor=2*a;                //divide
        posSolution=sum/divisor;
        if(root==0){
            document.getElementById("solution").innerHTML="Solution: x= " + posSolution;
        }
        else{
            quadraticSub(a,b,c, posSolution);
        }

    }


}
function quadraticSub(a,b,c,posSolution){
    var negSolution;
    var solution1=posSolution;
     b=Math.abs(b)*-1;
     var root;
     root=(b*b)-(4*a*c);
      root=Math.sqrt(root);
      sum=b-root;
      divisor=2*a;
     negSolution=sum/divisor;
     document.getElementById("solution").innerHTML="Solution x1= " + solution1 + " and x2= " + negSolution;
}

