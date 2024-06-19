function solution(arr) {
    var answer = []
    var min=Number.MAX_SAFE_INTEGER, minI;
    if(arr.length !== 1) {
        for (var i in arr) {
            if(arr[i] < min) {
                min = arr[i];
                minI = i;
            }
        }
        arr.splice(minI, 1);
        return answer = arr;
    }
    else {
        return answer = [-1];
    }
    
}