function singleLinkedList(){
    this.head = null;
}

function node(val){
    this.value = val;
    this.next = null;
}

singleLinkedList.prototype.insert = function(val){
    var head = this.head;
    if(!head){
        this.head = new node(val);
        return;
    }
    var currentNode = head;
    var newNode = new node(val);
    while(currentNode){
        if(!currentNode.next){
            currentNode.next = newNode;
            return;
        } else {
            currentNode = currentNode.next;
        }
    }
}

// Reverse alternate nodes in linked list
//Eg: 1->2->3->4->5 ahould become 2->1->4->3->5

singleLinkedList.prototype.rotatealt = function(){

    if (this.head == null){
        return;
    }else{
        var current = this.head;
        while(current.next != null){
            var temp;
            temp = current.value;
            current.value = current.next.value;
            current.next.value = temp;

            if (current.next.next == null) return;
            current = current.next.next;

        }// end of while
    }
}

singleLinkedList.prototype.reverse = function(root){
    console.log(root);
    var currNode = root.head, prevNode = null,temp = null;
    while(currNode != null) {
        temp = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = temp;
    }
    return prevNode ;
}

singleLinkedList.prototype.rotatebykthnode = function(sll,k){
    var prevHead = sll.head,
        previous = sll.head,
        current = sll.head,
        i = 1;
    while(current.next){
        if(i==k+1){
            sll.head = current;
            previous.next = null;
        }
        previous = current;
        current = current.next;
        i++;
    }
    current.next = prevHead;
    return sll;
}

