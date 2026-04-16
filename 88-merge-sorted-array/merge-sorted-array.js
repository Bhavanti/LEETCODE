const merge = (nums1, m, nums2, n) => {
    let z = m + n;
    let k = m - 1;        
    let j = n - 1;

    for (let i = z - 1; i >= 0; i--) {
        if (j < 0) {
            nums1[i] = nums1[k];
            k--;
        } else if (k < 0 || nums2[j] >= nums1[k]) {
            nums1[i] = nums2[j];
            j--;
        } else {
            nums1[i] = nums1[k];
            k--;
        }
    }
    return nums1;
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));