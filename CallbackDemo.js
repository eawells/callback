function finalCallback() {
    console.log("Finally, this prints")
}

function helloCallback(words) {
    console.log("Hello World"+words)
}

function days(callMeBack)  {
    callMeBack("! It's a good day")
    callMeBack(". It's a bad day")
    callMeBack(". It's an okay day")
}

function givesACallBack(bob){
    function foo(){
        console.log("Now the callbacks are born")
    }
    return foo
}

console.log("\nThe program keeps going.\n")
console.log("And going...\n")