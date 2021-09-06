function slice(arr, start, end) {
    let result = [];
    from = Math.max(start, 0);
    to = Math.min(end);

    if ((!end) || (end > arr.length)) {
        for (let i = from; i < arr.length; i++) {
            result.push(arr[i]);
        }
    } else {
        for (let i = from; i < to; i++) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}

slice([1, 2, 3, 4, 5], 2, 5);