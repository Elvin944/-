let input = document.querySelector("input");
let btn = document.querySelector("button");


input.onblur=function () {
    Validation(this)
 }
 
 input.onkeyup=function () {
     Validation(this)
 }
 input.onkeydown=function () {
     Validation(this)
 }

 function Validation(elem) {
    if (elem.value.trim()=="") {
        elem.nextElementSibling.classList.remove("d-none");
    } else {
        elem.nextElementSibling.classList.add("d-none");
    }
}


let ul = document.querySelector("ul");
btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (isNotNull(input)) {
        let li = document.createElement("li");
        let i = document.createElement("i");
        li.classList.add("list-group-item","w-25");
        li.innerText=input.value;
        input.value="";
        i.onclick=function () {
            this.parentElement.remove();
        }
        li.onclick=function () {
            activeLi(this);
        }
        i.classList.add("bi","bi-x","float-end","fs-3");
        li.append(i);
        ul.append(li); 
    }
});


document.querySelector("body").onkeydown=function (e) {
    if (e.key == "ArrowUp") {
        activeLi(document.querySelector("li.active").previousElementSibling)
    }
    else if(e.key == "ArrowDown"){
        activeLi(document.querySelector("li.active").nextElementSibling)
    }
    else if(e.key == "Delete"){
        let del = document.querySelector(".active");
        activeLi(del.remove())
    }
}

function activeLi(ele) {
    for (let i = 0; i < ele.parentElement.children.length; i++) {
        ele.parentElement.children[i].classList.remove("active")
    }
    ele.classList.add("active");
}

function deleteLi(event) {
    event.parentElement.remove();
}

function isNotNull(elem) {
    if (elem.value.trim()=="") {
        elem.nextElementSibling.classList.remove("d-none");
        return false;
    } else {
        elem.nextElementSibling.classList.add("d-none");
        return true;
    }
}
