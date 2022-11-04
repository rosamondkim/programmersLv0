function solution(hp) {
    let answer =0
    answer += Math.floor(hp/5)
    let left = hp%5
    
    answer += Math.floor(left/3)
    let left2 = left%3
    
    answer += Math.floor(left2/1)
    
    return answer
}
