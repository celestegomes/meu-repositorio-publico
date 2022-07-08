function validaArray(arr, num){
    switch (arr, num){
        case !arr || !num:
            return console.log(Error(ReferenceError)),
        case arr.lenght != num:
            return console.log(Error(RangeError)),
        case typeof arr !== "object":
            return console.log(Error(TypeError)),
        case typeof num !== "number":
            return console.log(Error(TypeError)),
        default:
            return console.log(arr)
    }
}

validaArray([quatro, seis, 2], 3)