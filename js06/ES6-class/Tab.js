class Tabs {
    constructor(select, type) {
        var container = document.querySelector(select)  //通过拿到外面的container,通过ocument.querySelector(select)传过来container1,...
        //再搜
        this.headeritem = container.querySelectorAll(".header li")
        this.boxitem = container.querySelectorAll(".box li")
        //console.log(this.headeritem,this.boxitem)
        this.type = type
        this.change()

    }
    change() {
        for (let i = 0; i < this.headeritem.length; i++) {
            //加自定义属性 
            this.headeritem[i].addEventListener(this.type, () => /* 这里箭头函数就不会调用,防止this.headeritem[i].onclick成为下面this的执向,让下面的this指向Tabs*/ {
                console.log(this)
                //点谁给谁绑active   this给你你点的对象
                //获取自身的属性
                //console.log(this.dataset.makima)
                var makima = i
                for (var m = 0; m < this.headeritem.length; m++) {
                    //管你点谁直接全删了
                    this.headeritem[m].classList.remove("active")
                    this.boxitem[m].classList.remove("active")
                }
                //再显示点的li
                this.headeritem[makima].classList.add("active")
                this.boxitem[makima].classList.add("active")
            })
        }
    }
}

export default Tabs