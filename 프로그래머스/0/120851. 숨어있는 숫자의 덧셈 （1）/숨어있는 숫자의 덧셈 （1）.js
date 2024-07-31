function solution(my_string) {
    var answer = 0;
    for(i of my_string) {
        if(!(isNaN(i))) answer += Number(i);
    }
    return answer;
}