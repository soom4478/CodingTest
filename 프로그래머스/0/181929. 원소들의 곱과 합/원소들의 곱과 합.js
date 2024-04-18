function solution(num_list) {
    var answer = 0;
    var sum = 0, mul = 1;
    for(var i of num_list) {
        sum += i;
        mul *= i;
    }
    if(sum*sum > mul) answer = 1;
    return answer;
}