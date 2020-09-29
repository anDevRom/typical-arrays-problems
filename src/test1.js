function test(arg) {
    if (arg === undefined || (Array.isArray(arg) && arg.length === 0)) {console.log(1)} else {console.log(2)}
    
}

test(1)
test()
test([])