function arrayIntersection(arr1, arr2) {
  return arr2.reduce((acc, item) => {
    if (!acc.includes(item) && arr1.includes(item)) acc.push(item);
    return acc;
  }, []);
}

module.exports = arrayIntersection;
