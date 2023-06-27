namespace _function {
    let a = {};

    const b = {
        b: 'it is b',
        _apply() {
            console.log(this);
        }
    };

    
    // function _apply2() {
    //     this.c ='qwe'
    //     console.log(this);
    // }

    // b._apply()
    // b._apply.apply(a)

    // _apply2.apply(b)
    // console.log(b)
    
    console.log(Object.apply(b))
}