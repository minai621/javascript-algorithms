import Comparator from '../../utils/Comparator';

export default function binarySearch(arr, target, compareFunction) {
  const comparator = new Comparator(compareFunction);

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (comparator.equal(arr[mid], target)) {
      return mid;
    }

    if (comparator.lessThan(arr[mid], target)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
