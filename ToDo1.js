
function pushFront(arr,val){
    for (let i = arr.length; i > 0; i--) {
        arr[i]=arr[i-1]
    }
    arr[0]=val
    return arr
}

function popFront(arr){
    let value = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i-1]=arr[i]
    }
    arr.pop()
    return value
}

function insertAt(arr,index,val){
    if(arr[index]){
        for (let i = arr.length; i > index; i--) {
            arr[i]=arr[i-1]
        }
        arr[index] = val
    }else{
        arr[index] = val
    }
    return arr
}

function removeAt(arr,index){
    let value = arr[index]
    for (let i = index + 1; i < arr.length; i++) {
        arr[i-1]=arr[i]
    }
    arr.pop()
    return value
}

function pairSwap(arr){
    for (let i = 0; i < arr.length-1; i+=2) {
        let aux = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = aux
    }
    return arr
}

function removeDup(arr){
    let dupCount = 0
    for (let i = 0, j = 1; i < arr.length; i++) {
        if(arr[i]!==arr[i+1]){
            arr[j]=arr[i+1]
            j++
        }else{
            dupCount++
        }
    }
    for (let i = 0; i < dupCount; i++) {
        arr.pop()
    }
    return(arr)
}

let arr = []
let value = 12
let index = 2
// Push al frente
console.log("Push al frente: ", pushFront(arr,value),"\n");

// Pop al frente
console.log("Pop al frente: ", popFront(arr),"\n");

// Insertar en
console.log("Insertar en: ", insertAt(arr,index,value))
insertAt(arr,0,11)
insertAt(arr,1,10)
insertAt(arr,0,9)
console.log("Inserciones extra: ",arr,"\n");

// Remover en
console.log("Remover en: ", removeAt(arr,index));
console.log("Array resultante: ",arr,"\n");

// Pares de intercambio
console.log("Pares de intercambio: ", pairSwap(arr),"\n");

// Eliminar duplicados
console.log("Eliminar duplicados: ", removeDup([0,0,0,0,1,2,2]));