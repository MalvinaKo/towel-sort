
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix) return Array(0);
  else { 
    for (let i=0; i<matrix.length; i++){
    if (i%2!==0) matrix[i].reverse()
    }
  }
  return arr.concat(...matrix)
}