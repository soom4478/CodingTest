function solution(cards1, cards2, goal) {
    var answer = '';
    let str = '';
    let len = Math.max(cards1.length, cards2.length);
    let i = 0, j = 0, k = 0;
    while(i < goal.length) {
        if(goal[i] === cards1[j]) {
            j++;
        } 
        else if (goal[i] === cards2[k]) {
            k++;
        }
        else {
            answer = 'No';
            break;
        }
        i++;
        if(i === goal.length) {
            answer = 'Yes';
        }
    }
    return answer;
}