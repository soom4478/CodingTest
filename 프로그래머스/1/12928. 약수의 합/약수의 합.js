function solution(n) {
    var answer = n;
    if(n !== 1 && n !== 0) {
        answer += 1;
        if(n !== 2) {
            for(let i = 2; i <= n / 2; i++) {
                if(n % i === 0) {
                    answer += i;
                }
            }
        }
    }
    
    return answer;
}