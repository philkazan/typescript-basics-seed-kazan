import { callbackify } from "util";

const input = 'fooBar';

function doSomethingWithTheCallBack(callback) {
    callback();
}

// anonymous function
(input) => {
    console.log(input);
}


doSomethingWithTheCallBack((input) => {
    console.log(input);
});