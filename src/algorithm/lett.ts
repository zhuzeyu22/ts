// 回形文字


// 1
// 1

// 2
/* 1 2
*  4 3
*/

// 3
/* 1 2 3
*  8 9 4
*  7 6 5
*/


function foo(size) {
    const list = (new Array(size * size)).fill(0)

    let n = 0
    let i = 0
    let count = 0

    const todo = [
        // right
        n => (n + 1) % size ? n + 1 : undefined,
        //bottom
        n => n + size,
        // left
        n => n % size ? n - 1 : undefined,
        // top
        n => n - size,
    ]

    while (list[i] === 0) {
        n++
        list[i] = n
        let next = todo[count % 4](i)
        if ((list[next] !== 0) || (next === undefined)) {
            count = count + 1
            i = todo[count % 4](i)
        }else{
            i = next
        }
    }

    convertTo2DArray(list, size).forEach((x) => {
        console.log(x)
    })
}

function convertTo2DArray(arr, size) {
    const result = Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
        arr.slice(index * size, index * size + size)
    );
    return result;
}

foo(1)
foo(2)
foo(3)
foo(4)
foo(5)