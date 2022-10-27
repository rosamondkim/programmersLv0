function solution(n) {
    let arr = [];
    for(i=0;i<=n;i++){
        arr.push(i);
    }
    let answer = arr.filter(x=>x%2!==0);
    return answer;
}