const input = document.querySelector("input")
const addBtn = document.querySelector(".addBtn")
const list = document.querySelector(".list")

addBtn.addEventListener("click", addToDo)

function addToDo() {
    const text = input.value.trim();
    if(text==="") return;


    list.innerHTML += `<li class= "todo-item"> 
    <p class="done">${text}</p> 
    <div class="btn-group">
    <button class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
     <button class="del"><i class="fa-solid fa-trash-can"></i></button>
     </div>
     </li>`

    list.addEventListener("click", (e)=>{
        const delBtn= e.target.closest(".del")
    if(delBtn){
       delBtn.closest("li").remove();
    }
    
    const editBtn = e.target.closest(".btn-edit")
    if (editBtn) {
        const li = editBtn.closest("li");
        const textElement = li.querySelector(".done");

        textElement.contentEditable = true;
        textElement.focus();


textElement.addEventListener("blur", ()=>{
    textElement.contentEditable = false;
          
            if(textElement.innerText.trim()===""){
                textElement.innerText = "Empty task";
                textElement.style.color = "red";
            }
}, { once: true})

textElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault(); 
                textElement.blur();  
            }
        });


    }
    
    })


    input.value="";
}