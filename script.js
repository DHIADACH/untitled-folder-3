function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function checkOrthogonality(v1, v2) {
    if (dotProduct(v1, v2) === 0) {
        console.log("The vectors are orthogonal.");
    } else {
        console.log("The vectors are not orthogonal.");
    }
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements that are greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the key at the correct position
        arr[j + 1] = key;
    }
}