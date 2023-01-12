function solution(my_string) {
    const arr = my_string.split("")
    const arr2 =[]
    for(i of arr){
        if(i === i.toUpperCase()) {
            arr2.push(i.toLowerCase())
           
        } else if( i ===  i.toLowerCase()) {
            arr2.push(i.toUpperCase())
       
        }  
    } 
    return arr2.join("")
}

