

// promise 嵌套 settimeout 的情况 reslove 在 settimeout 里面 


async function foo() {
    console.log('i am foo.')
}

async function runFoo() {
    await foo().then(()=> console.log('i am runFoo.'))
}

runFoo()