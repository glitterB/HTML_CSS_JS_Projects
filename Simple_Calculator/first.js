//TO display value of button pressed
function dis(val) {
    let dis = document.getElementById("display");
    dis.value += val;
}
;
//Solving function
function solve() {
    var a = document.getElementById("display");
    var b = eval(a.value);
    a.value = b;
}
;
//Factorial Function
function fact() {
    let facto = 1;
    let no = document.getElementById("display");
    let n = parseInt(no.value);
    for (let i = 1; i <= n; i++) {
        facto *= i;
    }
    no.value = facto.toString();
}
;
//ALL Clear Function
function clr() {
    let op = document.getElementById("display");
    op.value = null;
}
//Delete Function
function dele() {
    var str = document.getElementById("display");
    let strr = str.value;
    str.value = (strr.substring(0, strr.length - 1));
}
;
//Square Function
function sq() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.pow(ll, 2)).toString();
}
;
//Square root Function
function sqrt() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.sqrt(ll)).toString();
}
;
//natural log
function log_e() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.log(ll)).toString();
}
;
//natural to base 10
function log_10() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.log10(ll)).toString();
}
;
//sin asin
function sin() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.sin(ll)).toString();
}
;
//asin
function a_sin() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.asin(ll)).toString();
}
;
//cos 
function cos() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.cos(ll)).toString();
}
;
//acos
function a_cos() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.acos(ll)).toString();
}
;
//tan 
function tan() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.tan(ll)).toString();
}
;
//atan
function a_tan() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (Math.atan(ll)).toString();
}
;
//random number
function rand() {
    let op = document.getElementById("display");
    op.value = (Math.random()).toString();
}
;
//random integer
function randInt() {
    let op = document.getElementById("display");
    op.value = (Math.floor(Math.random() * 1000) + 1).toString();
}
;
//percentage CALCULATOR
function percnt() {
    let l = document.getElementById("display");
    let ll = parseInt(l.value);
    l.value = (ll / 100).toString();
}
;
//# sourceMappingURL=first.js.map