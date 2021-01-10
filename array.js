// printing reverse 
function printreverse(numarray){
    
    for(i=numarray.length-1 ; i>=0 ; i--){
        console.log(numarray[i]);    
    }
}

// max 
function isUniform(arr){
    var first = arr[0];
    for(var i=1;i<arr.length;i++){
        if(first!==arr[i]){
            return false;
        }
    }
    return true;
}


//sumarray


// function sumArray(arr){
//     var sum=0;
//     for(var i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }


function sumArray(arr){
    var sum=0;
    arr.forEach(function(element){
        sum+=element;
    });
    return sum;
}

// max()


function max(arr){
    var big=arr[0];
    for(var i=1;i<arr.length;i++){
        if (arr[i]>big){
            big=arr[i];
        }
    }
    return big;
}
