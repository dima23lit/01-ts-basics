function getFirstElement<T>(arr: T[]) : T {
  return arr[0];
}

console.log(getFirstElement<Number>([1, 2, 3]));           // 1
console.log(getFirstElement<String>(["a", "b", "c"]));     // "a"
console.log(getFirstElement<Boolean>([true, false, true])); // true