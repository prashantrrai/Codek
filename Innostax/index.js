function secondlargestArray(array){
    let largest = Number.POSITIVE_INFINITY;
    let secondLArgest = Number.POSITIVE_INFINITY;

    if(array.length < 2){
        return -1
    }
    for (let i=0; i<array.length; i++){
        if (array[i] > largest){
            secondLArgest = largest;
            largest = array[i]
        }
        //else if(array[i] > secondLArgest && array[i] !== largest){
        //     secondLArgest = array[i]
        // }

    //         if (secondLArgest === Number.POSITIVE_INFINITY) {
    //     return "No second largest element found";
    // }

        return secondLArgest;
    }
}

let nums = [1,2,4,5,6, 10, 34];

console.log(secondlargestArray(nums))

