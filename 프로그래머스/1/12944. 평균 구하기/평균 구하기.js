function solution(arr) {
    var answer = 0, sum=0;
    
    for (i of arr) {
        sum += i;
    }
    
    return answer = sum/arr.length;
}