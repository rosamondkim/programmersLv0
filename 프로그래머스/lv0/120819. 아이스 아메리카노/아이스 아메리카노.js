function solution(money) {
    var answer = [];
    let count = parseInt(money/5500);
    answer.push(count);
    
    let left = money%5500
    answer.push(left);
    
    return answer;
}