import { A_A } from './A.js'
import { B_B } from './B.js'
/* 解决依赖问题
A_A()
B_B()*/

function C() {
    A_A()
    B_B()

    console.log("cc")
}

export default C 
//导出一个默认的函数,只能导出一个