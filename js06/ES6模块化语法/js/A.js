function A1(){
    _a_common()
    console.log("A1-布局创建")
}

function A2(){
    _a_common()
    console.log("A2-布局创建")
}

//不希望布局用a_common,调用时无法访问到   带_的函数君子协定不调用
function _a_common(){
    console.log("a_common")
}

function test (){
    console.log("A1-test")
}

//给C.js用
function A_A(){
    console.log("A_A")
}
