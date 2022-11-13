function solution(sizes) {
    sizes.forEach(e=>e.sort((a,b)=>b-a));
    let 큰애 = sizes.map(x=>x[0]);
    let 작은애 = sizes.map(x=>x[1]);
    return Math.max(...큰애) * Math.max(...작은애);    
    console.log(큰애)
    console.log(작은애)
}