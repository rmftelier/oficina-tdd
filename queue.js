class Queue {
  elements

  constructor() {
    this.elements = []
  }

  size() {
    return this.elements.length;
  }

  add(item) {
    this.elements.push(item)
  }

  peek() {
    return this.elements[0];
  }

  dequeue() {
    return this.elements.shift();
  }


  isEmpty() {
    return this.elements.length === 0;
  }

}

module.exports = Queue