function solution(num_list) {
    var answer = 0;
    var even = "";
    var odd = "";
    
    for(var i of num_list) {
        if(i % 2 === 0) even += i;
        else odd += i;
    }
    
    answer = Number(even) + Number(odd);
    
    return answer;
}