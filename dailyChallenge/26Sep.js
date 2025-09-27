var triangleNumber = function(nums) {
    nums = nums.sort((a,b)=>{return a-b});
    console.log(nums)
    count = 0;
    for(let i = nums.length-1; i>1; i--){
        let storeIndex = i-1;
        while(true){
            if(nums[storeIndex-1] + nums[storeIndex] <= nums[i]){
                break;
            }
            console.log(nums[storeIndex-1], nums[storeIndex], nums[i])
            count++;
        }
    }
    return count
};

console.log(triangleNumber([2,2,3,4]))
console.log(triangleNumber([4,2,3,4]))