function B1(){
    _b_common()
    console.log("B1-布局创建")
}

function B2(){
    _b_common()
    console.log("B2-布局创建")
}

//不希望布局用a_common,调用时无法访问到   带_的函数君子协定不调用
function _b_common(){
    console.log("b_common")
}

//这里和A.js里的函数重名,B.js后加载会覆盖
function test (){
    console.log("B1-test")
}

//给C.js用
function B_B(){
    console.log("B_B")
}
