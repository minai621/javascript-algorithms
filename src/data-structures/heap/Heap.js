import Comparator from '../../../legacy-src/utils/comparator/Comparator';

// 이 힙은 추상 클래스
export default class Heap {
  constructor(comparatorFunction) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    }

    this.heapContainer = [];
    this.comparator = new Comparator(comparatorFunction);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  // 최상위 요소를 제거하고 반환합니다.
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  remove(item, comparator = this.compare) {
    // 제거할 항목의 수를 찾음
    const numberOfItemsToRemove = this.find(item, comparator).length;

    // 항목을 반복적으로 제거
    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // 제거 후 힙 정렬이 진행되면 인덱스가 변경되므로 매번 삭제할 항목의 인덱스를 다시 찾음
      const indexToRemove = this.find(item, comparator).pop();

      // 힙에서 마지막 자식을 제거할 경우에는 그냥 제거하면 되므로 heapify 과정이 필요하지 않음
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        // 힙의 마지막 요소를 제거된 위치에 이동시킴
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        // 부모 요소 가져오기
        const parentItem = this.parent(indexToRemove);

        // 부모가 없거나 부모가 현재 노드와 올바른 순서에 있는 경우 아래로 힙 정렬(heapify) 실행
        // 그렇지 않다면 위로 힙 정렬(heapify) 실행
        if (
          (
            !parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
          )
          && this.hasLeftChild(indexToRemove)
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
  }

  find(item, comparator = this.comparator) {
    const foundItemIndices = [];

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (comparator.equal(item, this.heapContainer[itemIndex])) {
        foundItemIndices.push(itemIndex);
      }
    }

    return foundItemIndices;
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  toString() {
    return this.heapContainer.toString();
  }

  heapifyUp(customStartIndex) {
    // 기본적으로 현재 인덱스를 마지막 요소로 설정
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    // 현재 노드에 부모가 있고, 부모와 순서가 맞지 않는 경우에만 루프 실행
    while (
      this.hasParent(currentIndex)
      && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      // 부모와 현재 노드의 위치를 교환
      this.swap(currentIndex, this.getParentIndex(currentIndex));

      // 부모 위치로 인덱스를 업데이트하여 상위 노드로 이동
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex; // 현재 인덱스를 설정, 기본은 루트(0번 인덱스)
    let nextIndex = null; // 다음으로 이동할 인덱스

    // 왼쪽 자식이 있는 동안 반복. 왼쪽 자식이 없으면 리프 노드라 더 이상 아래로 내려갈 필요가 없음
    while (this.hasLeftChild(currentIndex)) {
      // 오른쪽 자식이 있고, 오른쪽 자식이 왼쪽 자식보다 올바른 순서라면
      if (
        this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex); // 다음 인덱스를 오른쪽 자식으로 설정
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex); // 그렇지 않으면 왼쪽 자식으로 설정
      }

      // 현재 노드가 자식 노드와 올바른 순서에 있다면 반복을 중단
      if (this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex],
      )) {
        break;
      }

      // 현재 노드와 선택된 자식 노드의 위치를 교환하고, 인덱스를 아래로 이동
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparison method
      for ${firstElement} and ${secondElement} values.
    `);
  }
}
