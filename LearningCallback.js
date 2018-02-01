function helloCallback(words) {
    console.log("Hello World"+words)
}
function finalCallback() {
    console.log("Finally, this prints")
}

function days(callMeBack)  {
    callMeBack("! It's a good day")
    callMeBack(". It's a bad day")
    callMeBack(". It's an okay day")
}

function givesACallBack(bob){
    return foo
    function foo(){
        console.log("Now the callbacks are born")
    }
    console.log("This works")

}

setTimeout(finalCallback, 2505)
//does not work because calling setTimeout on "undefined" days() does not return a value
// setTimeout(days(helloCallback),2500)

//works because given func returns a func
setTimeout(givesACallBack(),2500)
console.log("Starting")
givesACallBack()

setTimeout(function(){days(helloCallback)}, 2500)



//foo = days(helloCallback)
//console.log(foo)
console.log("\nThe program keeps going.\n")
console.log("And going...\n")