var canJump = function(nums) {
    let jump = nums[0]
    if (nums.length == 1){
        return true;
    }
    for(let i=0; i<nums.length; i++){
        if (i + jump >= nums.length-1){
            return true;
        }
        if(jump == 0 && nums[i] ==0){
            return false;
        }
        if(i == nums.length){
            return true
        }
        if(jump <= nums[i]){
            jump = nums[i]
        }
        jump -= 1;
    }
    return true;
};


console.log(canJump([0,0,0,0,0,0,0]))
console.log(canJump([2,5,0,0,0,0,0,0]))