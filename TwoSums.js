const example1 = [ 2, 7, 11, 15 ]
const target1 = 13

const example2 = [ 3, 2, 4 ]
const target2 = 6

const example3 = [ 3, 3 ] 
const target3 = 6

function solveTwoSums (nums, target) {
  for (let i = 0 ; i < nums.length-1 ; i++) {
    
    for (let j = i + 1 ; j < nums.length ; j++) {
   
      let result;
      result = nums[i] + nums[j]   
      if (result === target) return [i,j]

    }
  }
}

console.log(solveTwoSums(example1, target1)) // output: [ 0, 2 ]
console.log(solveTwoSums(example2, target2)) // output: [ 1, 2 ]
console.log(solveTwoSums(example3, target3)) // output: [ 0, 1 ]