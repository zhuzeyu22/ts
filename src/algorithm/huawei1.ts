// 实现随机读取一个整数数组和一个整数，使用二分查找匹配数组中是否包含指定数。

const arr = [1, 4, 3, 12, 5, 73, 6, 24, 2, 3, 1, 10]
const n = 12

function find(n: number, arr: number[]): boolean {
    const length = arr.length

    if (length === 0) {
        return false
    } else if (length === 1 && arr[0] === n) {
        return true
    } else if (length === 1 && arr[0] !== n) {
        return false
    }

    const half = Math.floor(length / 2)

    return find(n, arr.slice(0, half)) || find(n, arr.slice(half + 1))
}

console.log(find(1, arr), true)
console.log(find(0, arr), false)
console.log(find(-1, arr), false)
console.log(find(-1, []), false)
console.log(find(10, [10]), true)

// find.call({}, [a,b]);
// find.apply({}, a,b);

const obj1: Object = {
    a: 1,
    b: 2,
    c: {
        c1: 1,
        c2: 2,
    },
}

const a1: Object = { ...obj1 }

function qwe() {
    let i = 0
    return function www() {
        i = i + 1
    }
}

class QWE {
    private i = 0
}

const QWEobj = new QWE()
