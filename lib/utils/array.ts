export function coverArraysByIndex<T>(arr1: T[], arr2: T[], index: number) {
  // 인덱스 기준으로 배열을 분할
  const arr1Part1 = arr1.slice(0, index)
  // 첫 번째 배열의 분할된 부분과 두 번째 배열을 합침
  const mergedArray = arr1Part1.concat(arr2)

  return mergedArray
}
