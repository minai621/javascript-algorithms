# Heap Class

## Properties
- `heapContainer`: 힙의 요소를 저장하는 배열입니다.
- `compare`: 요소 간 비교를 위한 `Comparator` 인스턴스.

## Constructor
- `constructor(comparatorFunction)`: `comparatorFunction`을 받아 비교 방식을 설정합니다. (추상 클래스처럼 사용하므로 직접 인스턴스화할 수 없습니다.)

## Methods
- `getLeftChildIndex(parentIndex)`: 부모 노드의 왼쪽 자식 인덱스를 반환합니다.
- `getRightChildIndex(parentIndex)`: 부모 노드의 오른쪽 자식 인덱스를 반환합니다.
- `getParentIndex(childIndex)`: 자식 노드의 부모 인덱스를 반환합니다.
- `hasParent(childIndex)`: 자식 노드가 부모를 가지고 있는지 여부를 반환합니다.
- `hasLeftChild(parentIndex)`: 부모 노드가 왼쪽 자식을 가지고 있는지 여부를 반환합니다.
- `hasRightChild(parentIndex)`: 부모 노드가 오른쪽 자식을 가지고 있는지 여부를 반환합니다.
- `leftChild(parentIndex)`: 부모 노드의 왼쪽 자식을 반환합니다.
- `rightChild(parentIndex)`: 부모 노드의 오른쪽 자식을 반환합니다.
- `parent(childIndex)`: 자식 노드의 부모를 반환합니다.
- `swap(indexOne, indexTwo)`: 두 인덱스의 요소를 교환합니다.
- `peek()`: 최상위 요소를 반환합니다.
- `poll()`: 최상위 요소를 제거하고 반환합니다.
- `add(item)`: 힙에 새 요소를 추가합니다.
- `remove(item, comparator)`: 힙에서 특정 요소를 제거합니다.
- `find(item, comparator)`: 힙에서 특정 요소의 인덱스를 찾습니다.
- `isEmpty()`: 힙이 비어 있는지 여부를 반환합니다.
- `toString()`: 힙 요소를 문자열로 반환합니다.
- `heapifyUp(customStartIndex)`: 새 요소가 추가된 후 힙 특성을 유지하기 위해 요소를 위로 이동합니다.
- `heapifyDown(customStartIndex)`: 최상위 요소가 제거된 후 힙 특성을 유지하기 위해 요소를 아래로 이동합니다.
- `pairIsInCorrectOrder(firstElement, secondElement)`: 요소 쌍이 힙 특성을 충족하는지 확인합니다. **구현되지 않은 추상 메서드로, 자식 클래스에서 구현해야 합니다.**

---

# MaxHeapAdhoc Class

## Properties
- `heap`: 힙의 요소를 저장하는 배열입니다.

## Constructor
- `constructor(heap)`: 배열을 받아 각 요소를 `add()` 메서드를 사용하여 힙에 추가합니다.

## Methods
- `add(num)`: 힙에 새로운 숫자를 추가합니다.
- `peek()`: 힙의 최상위 요소를 반환합니다.
- `poll()`: 힙의 최상위 요소를 제거하고 반환합니다.
- `isEmpty()`: 힙이 비어 있는지 확인합니다.
- `toString()`: 힙을 문자열로 반환합니다.
- `heapifyUp()`: 새 요소가 추가된 후 힙 특성을 유지하도록 위로 이동시킵니다.
- `heapifyDown()`: 최상위 요소가 제거된 후 힙 특성을 유지하도록 아래로 이동시킵니다.
- `getLeftChildIndex(parentIndex)`, `getRightChildIndex(parentIndex)`, `getParentIndex(childIndex)`: 부모 및 자식의 인덱스를 반환합니다.
- `hasLeftChild(parentIndex)`, `hasRightChild(parentIndex)`: 부모가 왼쪽 또는 오른쪽 자식을 가지고 있는지 확인합니다.
- `leftChild(parentIndex)`, `rightChild(parentIndex)`: 부모의 왼쪽 및 오른쪽 자식을 반환합니다.
- `swap(indexOne, indexTwo)`: 두 인덱스의 요소를 교환합니다.


--# MinHeapAdhoc Class

## Properties
- `heap`: 힙의 요소를 저장하는 배열입니다.

## Constructor
- `constructor(heap)`: 배열을 받아 각 요소를 `add()` 메서드를 사용하여 힙에 추가합니다.

## Methods
- `add(num)`: 힙에 새로운 숫자를 추가합니다.
- `peek()`: 힙의 최상위 요소를 반환합니다.
- `poll()`: 힙의 최상위 요소를 제거하고 반환합니다.
- `isEmpty()`: 힙이 비어 있는지 확인합니다.
- `toString()`: 힙을 문자열로 반환합니다.
- `heapifyUp()`: 새 요소가 추가된 후 힙 특성을 유지하도록 위로 이동시킵니다.
- `heapifyDown()`: 최상위 요소가 제거된 후 힙 특성을 유지하도록 아래로 이동시킵니다.
- `getLeftChildIndex(parentIndex)`, `getRightChildIndex(parentIndex)`, `getParentIndex(childIndex)`: 부모 및 자식의 인덱스를 반환합니다.
- `hasLeftChild(parentIndex)`, `hasRightChild(parentIndex)`: 부모가 왼쪽 또는 오른쪽 자식을 가지고 있는지 확인합니다.
- `leftChild(parentIndex)`, `rightChild(parentIndex)`: 부모의 왼쪽 및 오른쪽 자식을 반환합니다.
- `swap(indexOne, indexTwo)`: 두 인덱스의 요소를 교환합니다.

