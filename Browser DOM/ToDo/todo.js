let input = document.querySelector(".input_box")
let ul = document.querySelector(".task_list")

input.addEventListener("keydown" ,function(e){
    console.log("event object", e)
    if(e.key=="Enter"){
        let task = input.value;
        console.log(task);
        let li = document.createElement('li');
        li.innerText=task;
        ul.appendChild(li)

        li.addEventListener("dblclick" , function(){
            li.remove()
        })
        input.value = "";
        
       
    }
})
