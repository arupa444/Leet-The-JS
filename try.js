let store = "12.423"
store = store.split(".").map((ele)=>{
    return Number(ele)
})
console.log(store)