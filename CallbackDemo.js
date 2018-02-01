function givesACallBack(bob){
    function foo(){
        console.log("Now the callbacks are born")
    }
    return foo
}

function finalCallback() {
    console.log("Finally, this prints")
}

function helloCallback(words) {
    console.log("Hello World"+words)
}

function days(callMeBack)  {
    callMeBack("! It's a good day!")
    callMeBack(". It's a bad day.")
    callMeBack(". It's another day")
}



days(helloCallback)








