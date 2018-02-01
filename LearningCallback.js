function helloCallback(word) {
    console.log("Hello World"+word)
}
function finalCallback() {
    console.log("Finally, this prints")
}

function days(callMeBack)  {
    callMeBack("! It's a good day")
    callMeBack(". It's a bad day")
}

function givesACallBack(bob){

    function foo() {
        console.log("Now the time has passed")
    }
    console.log("This works")
    return foo
}

//does not work because calling setTimeout on "undefined" days() does not return a value
// setTimeout(days(helloCallback),2500)

//works because given func returns a func
// setTimeout(givesACallBack(),2500)
console.log("Starting")
givesACallBack()

setTimeout(finalCallback, 2500)

//setTimeout(function(){days(helloCallback)}, 2500)
//foo = days(helloCallback)
//console.log(foo)
//console.log("\nThe program keeps going.\n")
//console.log("And going...\n")
