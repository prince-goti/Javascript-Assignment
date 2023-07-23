let marks = [95,99,78,37,92]

let temp_max = -Infinity

for (let i = 0; i<marks.length; i++){
    if(temp_max<marks[i]){
        temp_max= marks[i]
    }
    // temp_max = temp_max<marks[i] ? marks[i] : temp_max;
}

console.log(temp_max)