let l = prompt('Enter the number');
var temp, cbe = 0;
temp = l
while( l > 0){

   var arm = l % 10 
   cbe  = cbe + (arm * arm * arm);
    l = Math.floor(l / 10);
    
}
if(temp == cbe){

    console.log(cbe,"is a Armstrong number")

}
else{
    console.log(cbe,"is not a Armstrong number")
}