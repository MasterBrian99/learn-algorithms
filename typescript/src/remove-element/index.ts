
/*
export default function removeElement(nums: number[], val: number): number {
    let arrLength=nums.length;
    while (arrLength--) {
        if (nums[arrLength]===val) {
            nums.splice(arrLength,1)
        }    
    }
    return nums.length;
    
};
*/

export default function removeElement(nums: number[], val: number): number {
    let len=0;
    for( let num of nums ){
        if( num !== val ) {
            nums[len++] = num
        }
    }

    return len;
    
};