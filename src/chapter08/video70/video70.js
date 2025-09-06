console.log("Video 70");    

const saveBtn = document.getElementById("btnSave");

const inputTodo = document.getElementById("name");

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

if(saveBtn) {
    saveBtn.addEventListener("click", async() => {
    })

saveBtn.addEventListener("click", async() => {
    
    const myTodo = {
        id: getRandomInt(1,1000),
        name: inputTodo.value
    }
    const currentTodoStr = localStorage.getItem("todo");


    if(currentTodoStr){
        //convert string to object
        const currentTodo = JSON.parse(currentTodoStr);

        //push new todo to array
        currentTodo.push(myTodo);
        localStorage.setItem("todo", JSON.stringify(currentTodo))
    }else{
        localStorage.setItem("todo", JSON.stringify([myTodo]))
    }
    //success va redirect to list page
    window.location.href = "video70.html"

})
}

const generateTodoTable = () => {
    const todoList = localStorage.getItem("todo");
    const tbody = document.querySelector("#todoList tbody");
    
    if(todoList){
        const todoArray = JSON.parse(todoList)
        if(todoArray && todoArray.length){
            todoArray.forEach((todo) => {
                tbody.innerHTML += `<tr>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td>
                        <button class="btnDelete" 
                        data-id="${todo.id}">Xóa</button>
                    </td>
                </tr>`;
            })                                                                                                                               
        }
    }
}

generateTodoTable();

const btnDelete = document.querySelectorAll(".btnDelete");

if(btnDelete){
    btnDelete.forEach((btn,index) => {
        console.log(btn,index);
        btn.addEventListener("click", (event) => {
                const id = btn.getAttribute("data-id");
                handleDeleteTodo(id);
            })     
    })
}

const handleDeleteTodo = (id) => {
    const todoList = localStorage.getItem("todo");
    if(todoList){
        const todoAarray = JSON.parse(todoList)
        const newTodoArray = todoAarray.filter((todo) => todo.id + "" !== id);
        localStorage.setItem("todo", JSON.stringify(newTodoArray))
        window.location.reload();
    }

}
                                      