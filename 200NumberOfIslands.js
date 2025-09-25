var numIslands = function(grid) {
    storeFlattenMap = new Map()
    let tempStore = 0
    let tempStoreFlattening = 0
    let flattening = 0
    let status = false

    for([index1, i] of grid.entries()){
        flattening = index1 * i.length
        for([index2, j] of i.entries()){
            flattening += 1
            if (grid[index1][index2] == "1"){
                d
            }
        }
    }
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))