import { printHelloWorld as hello, PAGE_SIZE } from "./utils.js";
import Counter from "./Counter.js"

hello();

const counter = new Counter();
for (let i = 0; i < PAGE_SIZE; i++){
    counter.countUp();
    console.log(counter.count);
}