var inputEl = document.querySelector(".input-el")
var addBtn = document.querySelector(".add-btn")
var contentEl = document.querySelector(".content")
var paraEl = document.querySelector(".para-el")
var dltEl = document.querySelector(".dlt-btn")
var contentCover = document.querySelector(".content-cover")
var arrlist =[];

addBtn.addEventListener("click",function(){
    var inputvalue = inputEl.value;
    if(inputvalue !== ""){
         arrlist.push(inputvalue)
         inputEl.value=""
    showlist()
    }
})

function showlist(){
    contentCover.innerHTML=""
    for(i=0;i<arrlist.length;i++){
        var arrlistadd=`<div class="content">
                <input type="checkbox" class="box-el">
                <p class="para-el">${arrlist[i]}</p>
                <button class="material-symbols-outlined" onclick="deletecontent(${i})">delete</button>
            </div>`
            contentCover.innerHTML += arrlistadd
        }
}

function deletecontent(index){
    arrlist.splice(index,1);
    showlist();
}