function transform(nums){
    let sortedNumArray=nums.sort(function(a,b){return a -b});
    let squaredNums= [];
    for(let i=0;i<=sortedNumArray.length-1;i++){
        squaredNums[i]= sortedNumArray[i]*sortedNumArray[i]
    }
    return squaredNums

}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) // [9,16,25,64,81]