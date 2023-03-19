class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    add(value) {
        let newNode = new Node(value)
        let currentNode = this.head
        let lastNode = null

        while(currentNode){
            lastNode = currentNode
            currentNode = currentNode.next
        }

        if(!lastNode){
            this.head = newNode
        }else{
            lastNode.next = newNode
        }

        return this
    }

    display() {
        let displayStr = ""
        let currentNode = this.head

        while(currentNode){
            displayStr+=(currentNode.value)
            currentNode = currentNode.next
            if(currentNode){
                displayStr+=" -> "
            }
        }

        return displayStr
    }
}

let lista = new SLL()

lista.add(1)
lista.add(2)
lista.add(3)
console.log(lista.display())