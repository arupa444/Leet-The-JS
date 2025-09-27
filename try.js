var triangleNumber = function(nums) {
    nums = nums.sort((a,b)=>{return a-b});
    console.log(nums)
    let count = 0;
    let storeTheRepeat = 1
    let lastCount = 0
    for(let i = nums.length-1; i>1; i--){
        let storeIndex = i-1;
        let storeIndex1 = i-2;
        console.log(nums[storeIndex1], nums[storeIndex], nums[i])
        if(nums[i] == nums[i-1]){
            storeTheRepeat += 1;
            continue;
        }
        while(true){
            if(nums[storeIndex1] + nums[storeIndex] <= nums[i]){
                break;
            }
            lastCount++;
            if(storeIndex == 1){
                break;
            }
            storeIndex -= 1;
        }
        count += lastCount*storeTheRepeat;
        storeTheRepeat = 0
        lastCount = 0
    }
    count  += lastCount*storeTheRepeat;
    return count
};

console.log(triangleNumber([2,2,3,4]))
console.log(triangleNumber([4,2,3,4]))