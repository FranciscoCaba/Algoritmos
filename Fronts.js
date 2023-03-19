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

    addFront(value) {
        let newNode = new Node(value)

        newNode.next = this.head

        this.head = newNode

        return this
    }

    removeFront(){
        let lastValue = this.head.value
        this.head = this.head.next

        return lastValue
    }

    front(){
        if(!this.head)
            return null
        
        return this.head.value
    }

    view() {
        var currentNode = this.head;
        process.stdout.write("SLL: ");

        while(currentNode){
            process.stdout.write(`${currentNode.value} -> `);

            currentNode = currentNode.next
        }
        console.log();
    }
}
let lista = new SLL()

lista.addFront("Node 1")
lista.addFront("Node 2")
lista.addFront("Node 3")
lista.view()

console.log(`deleted node: ${lista.removeFront()}`);

console.log(`Front: ${lista.front()}`);

lista.view()