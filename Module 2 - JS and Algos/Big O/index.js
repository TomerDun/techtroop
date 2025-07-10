// 1: O(n)
// 2: O(log n)
// 3: O(1)
// 4: O(n*m) 
// 5: O(n) assuming all unshown function are O(1), n is number of recepients


// Ex6
function findDuplicates(arr) {
    const history = new Set();
    for (item of arr) {
        if (history.has(item)) return false;
        history.add(item);
    }
    return true;
}


// Ex7
const employees = {
    ax01: {name: 'Ray', age: 28, salary: 1300},
    qs84: {name: 'Lucius', age: 31, salary: 840},
    bg33: {name: 'Taylor', age: 18, salary: 2700},
}

function findEmployeeSalary(id) {
    return employees[id].salary
}


// Ex8
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

function findIndex(arr, num) {
    let mid;
    let start = 0
    let end = arr.length - 1

    while (end - start >= 0) {
        mid = Math.floor((end - start) / 2) + start;
        if (arr[mid] === num) return mid;

        // Too big
        if (num < arr[mid]) {
            end = mid - 1;
        }
        else { // Too small
            start = mid + 1
        }
    }
    return -1;
}

console.log(findIndex(numbers, 2630));


// Ex9
// green - O(1); blue: O(n); yellow: O(log n); red: O(n^2)



