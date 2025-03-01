function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i<=number; i++) {
        let count = 1;
        for(let j = 1; j<=i/2; j++) {
            if(i % j === 0) {
                count++;
                if(count > limit) {
                    answer += power;
                    break;
                }
            }
        }
        if(count <= limit) {
            answer += count;
        }
    }
    return answer;
}