function helloCallback(words) {
    console.log("Hello World"+words)
}
function finalCallback() {
    console.log("Finally, this prints")
}

function days(callMeBack)  {
    callMeBack("! It's a good day")
    callMeBack(". It's a bad day")
}

function givesACallBack(){
    function foo(){
        console.log("Now the callbacks are born")
    }
    return foo
}

setTimeout(finalCallback, 2505)
//days(helloCallback)
//setTimeout(days(helloCallback),500)

// foo = days(helloCallback)
// console.log(foo)

setTimeout(givesACallBack(),2500)

setTimeout(function(){days(helloCallback)}, 2500)

console.log("Starting")
console.log("\nThe program keeps going.\n")
console.log("And going...\n")