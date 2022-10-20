function solution(sides) {
    let max = Math.max(...sides);
    let answer = sides.reduce((누적값,현재값)=>누적값+현재값,0)-max;
    return answer > max ? 1 :2;
    
}