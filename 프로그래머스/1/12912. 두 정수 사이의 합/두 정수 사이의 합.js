function solution(a, b) {
    var answer = 0, sum=0, n1, n2;
    if(a<b) {
        n1 = a;
        n2 = b;
    }
    else {
        n1 = b;
        n2 = a;
    }
    for(let i=n1; i<=n2; i++) {
        sum+=i;
    }
    return answer = sum;
}