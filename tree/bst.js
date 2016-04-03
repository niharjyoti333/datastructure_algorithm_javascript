// first need to create a root
function binarySearchTree(){
    this.root = null;
}

//create a node
function node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

//push value to tree
binarySearchTree.prototype.push = function(val){
    var root = this.root;
    if(!root){
        this.root = new node(val);
        return;
    }
    var currentNode = root;
    var newNode = new node(val);
    while(currentNode){
        if(val<currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode;
                return;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right){
                currentNode.right = newNode;
                return;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}





































