function solution(my_string, n) {
    var answer = '';
    for(i of my_string) {
        for(let j=0; j<n; j++) {
            answer += i
        }
    }
    return answer;
}