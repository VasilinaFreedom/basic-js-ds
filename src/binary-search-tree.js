const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree}
  

  add(data) {
    this.rootTree = addElem(this.rootTree, data);

      function addElem(node, data) {
        if (!node) {return new Node(data);}

        if (node.data === data) {return node;}

        if (data < node.data) {node.left = addElem(node.left, data);
        } else {node.right = addElem(node.right, data);}

        return node;
      }
    }
    has(data) {
      return searchElem(this.rootTree, data);

      function searchElem(node, data) {
        if (!node) {return false;}

        if (node.data === data) {return true;}

        return data < node.data ? searchElem(node.left, data) : searchElem(node.right, data);
      }
    }
  
  find(data) {
  //   let node = this.data;
  //   while(node!=null){
  //     if(node.data===data){return node.data;}
  //    else if(data>node.data){
  //     node=node.right;
  //   } else{
  //     node=node.left;
  //   }
  // } return null;
  return searchElem(this.rootTree, data);

      function searchElem(node, data) {
        if (!node) {return null;}
        return data < node.data ? searchElem(node.left, data) : searchElem(node.right, data);
      }
}

  remove(data) {
    this.rootTree = removeElem(this.rootTree, data);

    function removeElem(node, data) {
      if (!node) {return null;}

      if (data < node.data) {
        node.left = removeElem(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeElem(node.right, data);
        return node;
      } else {
          if (!node.left && !node.right) {return null;}

        if (!node.left) {node = node.right;
          return node;}

        if (!node.right) {node = node.left;
          return node;}

        let rightMin = node.right;
        while (rightMin.left) {rightMin = rightMin.left;}
        node.data = rightMin.data;

        node.right = removeElem(node.right, rightMin.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {return null;}
    let node = this.rootTree;
    while (node.left) {node = node.left;}
    return node.data;
  }

  max() {
    if (!this.rootTree) {return null;} //то же самое, только для правого
    let node = this.rootTree;
    while (node.right) {node = node.right;}
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};