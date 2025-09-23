var compareVersion = function(version1, version2) {

    store = version1.split(".").map((ele)=>{
        return Number(ele)
    })

    store1 = version2.split(".").map((ele)=>{
        return Number(ele)
    })
    console.log(store, store1)

    store.forEach((ele, index)=>{
        if
    })

    if(version1 < version2){
        return 1
    }else{
        return -1
    }
};

console.log(compareVersion("1.20", "2.21"))