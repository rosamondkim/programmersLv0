function solution(array) {
    let max = [...array].sort((a,b)=>a-b)[array.length-1]
    let answer = [max,array.indexOf(max)]
    return answer;
}