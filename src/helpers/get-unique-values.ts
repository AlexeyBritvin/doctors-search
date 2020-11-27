const getUniqueArrayValues = (arr: any[], callback: (item: any) => any) => {
  const modifiedArray = arr.map(callback)
  return Array.from(new Set(modifiedArray))
}

export default getUniqueArrayValues
