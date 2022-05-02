const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
    
  }
}
class Queue {
 
    constructor () {
      this.head = null;
      this.tail = null;
      this.queue = {}
      this.length = 0;
    }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    const node = new Node(value) //создаем новый элемент (узел)
    if(this.head){ //если эл. есть в очереди
      this.tail.next=node; //то следующий за за последним (хвостом) будет равен узлу (новому элементу)
      this.tail=node; //и да, теперь в нашем хвосте новый узел(новый эл)
    } else{
      this.head=node; //если нет элементов, но тогда голова (первый) будет узлом
      this.tail=node; //и она же хвост
    }
      this.length++; //увеличиваем длину очереди
  }
  

  dequeue() {
    const first=this.head;
    this.head=this.head.next;
    this.length--;
    return first.value; //нам нужно удалить 1 элемент, он лежит в хэдере, теперь первый в хэдере будет равен следующему, длину очереди уменьшаем и возвращаем наш тот первый изначальный элемент
  }
  }


module.exports = {
  Queue
};

// class Node {
//   constructor (value) {
//     this.value = value;
//     this.next = null;
    
//   }
// }

// class Queue {
//   constructor () {
//     this.head = null;
//     this.tail = null;
//     this.queue = {}
//     this.length = 0;
//   }

//   getUnderlyingList() {
//     return this.queue
//   }
//   enqueue(value) {
//     const node = new Node(value) //создаем новый элемент (узел)
//     if(this.head){ //если эл. есть в очереди
//       this.tail.next=node; //то следующий за за последним (хвостом) будет равен узлу (новому элементу)
//       this.tail=node; //и да, теперь в нашем хвосте новый узел(новый эл)
//     } else{
//       this.head=node; //если нет элементов, но тогда голова (первый) будет узлом
//       this.tail=node; //и она же хвост
//     }
//       this.length++; //увеличиваем длину очереди
//   }
//   dequeue() {
//     const first=this.head;
//     this.head=this.head.next;
//     this.length--;
//     return first.value; //нам нужно удалить 1 элемент, он лежит в хэдере, теперь первый в хэдере будет равен следующему, длину очереди уменьшаем и возвращаем наш тот первый изначальный элемент
//   }
// }