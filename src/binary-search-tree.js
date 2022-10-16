const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.head = null;
    }

  root() {
        return this.head;
  }z

  add(data) {
      this.head = addData(this.head, data);

      function addData(node, data) {
          if (!node) return new Node(data);

          if (node.data === data) return node;

          if (node.data < data) {
              node.right = addData(node.right, data);
          }

          if (node.data > data) {
              node.left = addData(node.left, data);
          }

          return node;
      }
  }

  has(data) {
      const searchData = node => {
          if (!node) return false;

          if (node.data === data) return true;

          if (node.data > data) return searchData(node.left);

          if (node.data < data) return searchData(node.right);
      }

      return searchData(this.head);
  }

  find(data) {
      const findData = node => {
          if (!node) return null;

          if (node.data === data) return node;

          if (node.data > data) return findData(node.left);

          if (node.data < data) return findData(node.right);
      }

      return findData(this.head);
  }

  remove(data) {
      this.head = removeData(this.head);

      function removeData(node) {

          if (!node) return null;

          if (node.data > data) {
              node.left = removeData(node.left);

              return node;
          } else if (node.data < data) {
              node.right = removeData(node.right);

              return node;
          } else {
              if (!node.left && !node.right) return null;

              if (!node.left) {
                  node = node.right;
                  return node;
              }

              if (!node.right) {
                  node = node.left;
                  return node;
              }

              let minFromRight = node.right;

              while(minFromRight.left) {
                  minFromRight = minFromRight.left;
              }

              node.data = minFromRight.data;
              node.right = removeData(node.right, node.data);
              return node;
          }
      }
  }

  min() {
      const findMin = node => {
          if (!node) return null;

          if (!node.left) {
              return node.data;
          }

          return findMin(node.left);
      }

      return findMin(this.head);
  }

  max() {
      const findMax = node => {
          if (!node) return null;

          if (!node.right) {
              return node.data;
          }

          return findMax(node.right);
      }

      return findMax(this.head);

  }
}

module.exports = {
  BinarySearchTree
};