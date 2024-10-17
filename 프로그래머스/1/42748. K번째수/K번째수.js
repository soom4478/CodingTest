function solution(array, commands) {
    var answer = [];
    
    for(let i of commands) {
        let a = (array.slice(i[0]-1, i[1])).sort((a,b) => {
            return a-b;
        });
        answer.push(a[i[2]-1]);
    }
    
    return answer;
}