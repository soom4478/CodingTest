function solution(array, height) {
    var answer = 0;
    for(i in array) {
        if(array[i] > height) answer += 1;
    }
    return answer;
}