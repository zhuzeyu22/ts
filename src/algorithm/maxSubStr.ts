// 最长子串
const s = 'afgbqkwhjsakdlskjdfsadkssskddlkkkd'

function foo(str: string) {
    // const regex = /[a-zA-Z]+/
    // return str.match(regex)

    if (str.length === 0) {
        return []
    }
    const obj: any[] = []

    let _nowStr = ''
    let _nowNum = 0
    for (const s of str) {
        if (s !== _nowStr) {
            obj.push({ _nowStr, _nowNum })
            _nowNum = 1
            _nowStr = s
        } else {
            _nowNum++
        }
    }
    obj.push({ _nowStr, _nowNum })
    obj.sort((a: any, b: any) => (b._nowNum | 0) - (a._nowNum | 0))
    const max = obj[0]._nowNum
    return obj.filter(o => o._nowNum === max).map(o => o._nowStr)
}

// console.log(foo(s))