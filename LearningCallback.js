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
    return foo
    function foo() {
        console.log("This works")
    }

}

//does not work because calling setTimeout on "undefined" days() does not return a value
//setTimeout(days(helloCallback),2500)
setTimeout(givesACallBack(helloCallback),2500)

setTimeout(function(){days(helloCallback)}, 2500)
foo = days(helloCallback)
console.log(foo)
console.log("\nThe program keeps going.\n")
console.log("And going...\n")
