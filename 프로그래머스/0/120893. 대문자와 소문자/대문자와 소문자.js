function solution(my_string) {
    var answer = '';
    for(i of my_string) {
        if(i.toUpperCase() == i) answer += i.toLowerCase()
        else answer += i.toUpperCase()
    }
    return answer;
}