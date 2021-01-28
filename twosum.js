/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//make a hash table for key values
//make empty array for return
//loop through array
//put difference of target and nums[i] in variable
//find difference in hash table
//if difference in there then push index to empty array

var twoSum = function(nums, target) {
    let hash = {}
    let arr = []
    
    
    for (i=0; i<nums.length; i++){
        let currentnumber = nums[i]
        let difference = target-currentnumber
        let ind = hash[difference]
        
        if (ind != undefined){
        return [ind, i]
    } else 
        hash[currentnumber] = i
    }
    
    
}

console.log(twoSum([1,4,2,6,3,4,2], 4))