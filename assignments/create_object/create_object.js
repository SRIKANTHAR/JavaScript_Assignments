function CreateObject(arr) {
    // Write your code here
    let obj = {};
    let i=0;
    let j=1;

    while (i<arr.length && j<arr.length){
        obj[arr[i]] = arr[j];
        i += 2;
        j += 2;
    }
    return obj;
}

module.exports = CreateObject;
