function solution(array) {
    array.sort((a,b)=>a-b);
    return array[Math.floor(array.length/2)]
}

// 1. 먼저 오름차순 정렬