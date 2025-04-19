function solution(n)
{
    let answer = n.toString().split('').reduce((sum, num) => sum + Number(num), 0);
    
    return answer;
}