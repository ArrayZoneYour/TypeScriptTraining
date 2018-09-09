// "MdMail" => "md",
const segmentWithoutUpper = "MdMail".split(/[A-Z]/g).slice(1);
const segmentUpper = "MdMail".match(/[A-Z]/g);
const lib = segmentUpper[0].toLowerCase() + segmentWithoutUpper[0];
// console.log(lib);

const log = (num: number) => console.log('Outer Arrow Function: ', num);
let i = 0;
for (/*let */i = 1; i < 5; i ++) {
    log(i);
    function f() {
        console.log('Inner function: ', i);
    }
    f();
    setTimeout(() => console.log('SetTimeout Arrow function: ', i), 100);
    setTimeout(function () {
        console.log('SetTimeout function: ', i);
    }, 100)
}