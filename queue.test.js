const Queue = require('./queue')

describe('Queue', () => {
  let queue

  beforeEach(() => {
    queue = new Queue();
  })

  it('Deve criar uma fila', () => {
    expect(queue).toEqual({ elements: [] })
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    queue.add('a')
    expect(queue.size()).toEqual(1)
    expect(queue.peek()).toBe('a')
  })

  it('Deve escolher o primeiro item da fila', () => {
    queue.add('c')
    queue.add('b')

    expect(queue.peek()).toBe('c')
    expect(queue.elements).toEqual(['c', 'b'])
  })

  it('Deve remover o primeiro item da fila', () => {
    queue.add('a')
    queue.add('b')
    queue.add('c')

    expect(queue.peek()).toBe('a')
    expect(queue.dequeue()).toBe('a')
    expect(queue.elements).toEqual(['b', 'c'])
  })

})