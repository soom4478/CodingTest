function solution(s) {
    let answer = 0;
    let index = 0;

    while (index < s.length) {
        let x = s[index];
        let countX = 0;
        let countOther = 0;

        while (index < s.length) {
            if (s[index] === x) {
                countX++;
            }
            else {
                countOther++;
            }
            
            index++;
            
            if (countX === countOther) {
                break;
            }
        }
        answer++;
    }

    return answer;
}
