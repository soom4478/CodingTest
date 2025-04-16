function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a, b) => {
       return b-a; 
    });
    
    for(let i=0; i<score.length; i += m) {
        let apples = score.slice(i, i+m);
        if(apples.length === m) {
            answer += Math.min.apply(null, apples) * m;
        }
    }
    
    return answer;
}