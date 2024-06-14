function solution(numbers) {
    var answer = 0, sum=0;
    for (i of numbers) {
        sum += i;
    }
    answer = sum/numbers.length;
    return answer;
}