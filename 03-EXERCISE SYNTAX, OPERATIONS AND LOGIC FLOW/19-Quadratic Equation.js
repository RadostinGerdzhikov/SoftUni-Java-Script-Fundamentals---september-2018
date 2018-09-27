'use strict';

function solveQuadraticEquation(nums1, nums2, nums3) {

    let discriminant = Math.pow(nums2, 2) - (4 * nums1 * nums3);
    if (discriminant > 0) {
        let x1 = (-(nums2) + Math.sqrt(discriminant)) / (2 * nums1);
        x1 = x1.toFixed(5);
        let x2 = ((-nums2) - Math.sqrt(discriminant)) / (2 * nums1);
        console.log(x2);
        console.log(x1);
    } else if (discriminant === 0) {
        let x = -(nums2) / (2 * nums1);
        console.log(x);
    } else {
        console.log("no");
    }
}

solveQuadraticEquation(6, 11, -35);
solveQuadraticEquation(1, -12, 36);