function solution(strArr) {
    var answer = [];
    for(i in strArr) {
        if(i%2==0) answer.push(strArr[i].toLowerCase());
        else answer.push(strArr[i].toUpperCase());
    }
    return answer;
}