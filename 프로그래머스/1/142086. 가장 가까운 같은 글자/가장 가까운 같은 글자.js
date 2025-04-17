function solution(s) {
    var answer = [];
    
    for(let i=s.length-1; i>0; i--) {
        let index = s.lastIndexOf(s[i], i-1);
        console.log(index)
        answer.push(index === -1 ? -1 : i-index);
    }
    answer.push(-1);
    
    return answer.reverse();
}