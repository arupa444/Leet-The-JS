var compareVersion = function(version1, version2) {

    store = version1.split(".").map((ele)=>{
        return Number(ele)
    })

    store1 = version2.split(".").map((ele)=>{
        return Number(ele)
    })


    for(let i=0; i<Math.max(store.length, store1.length); i++){
        ele = (store[i] !== undefined) ? store[i] : 0
        ele1 = (store1[i] !== undefined) ? store1[i] : 0
        if ( ele < ele1){
            return -1
        }else if(ele > ele1){
            return 1
        }
    }
    return 0
};

console.log(compareVersion( "1", "1.1"))