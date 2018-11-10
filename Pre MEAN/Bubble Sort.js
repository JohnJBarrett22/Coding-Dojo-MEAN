function bubbleSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        let swapped = false;
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            return;
        }
    }
  console.log(arr)
}

//Classify each of the following functions according to their Big O Time complexity:
//#1
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//O(n)

//#2
function findNth(arr, n){
    console.log(arr[n]);
}
//O(1)

//#3
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
//O(n)

//#4
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
//O(n2)