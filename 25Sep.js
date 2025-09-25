var minimumTotal = function(triangle) {
    if(triangle.length == 1){
        return triangle[0][0]
    }
    for(let index1=triangle.length-2; index1>=0; index1--){
        for([index2, val] of triangle[index1].entries()){
            triangle[index1][index2] = Math.min(triangle[index1+1][index2]+triangle[index1][index2],triangle[index1+1][index2+1]+triangle[index1][index2])
        }
    }
    return triangle[0][0]
};


console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))