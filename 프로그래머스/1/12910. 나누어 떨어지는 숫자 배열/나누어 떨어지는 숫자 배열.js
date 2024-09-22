function solution(arr, divisor) {
    var answer = [];
    for(let i of arr) {
        if(i%divisor === 0) answer.push(i);
    }
    answer.sort(function(a, b) {
                return a-b;
    })
    if(answer[0] == null) answer.push(-1);
    return answer;
}