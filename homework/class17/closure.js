function parent(){
    let display = "hello world !"
    function greet(){
        console.log(display)
    }
    display = "hello" // changed the value
    return greet();
}

parent();
