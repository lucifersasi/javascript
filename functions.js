console.log(isEven);
function isEven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}



console.log(factorial);
function factorial(num){
    if(num==0){
        return 1;
    }
    else{
        for(i=1;i<=num;i++){
            num=num*i;
        }
   
    return num;
    }
}
