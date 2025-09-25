var fractionToDecimal = function(numerator, denominator) {
    if(!(numerator%denominator)){
        return String(numerator/denominator)
    }

    let store = String(numerator/denominator)

    store = store.split('.')[1]
    console.log(store)

};
console.log(fractionToDecimal(10,3))