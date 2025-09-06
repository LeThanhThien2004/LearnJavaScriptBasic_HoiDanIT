console.log("video 72");

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json()
    console.log(data) 

    const tbody = document.querySelector("#blogs tbody");
    if(data && data.length) {
        data.forEach((blog,index) => {
            tbody.innerHTML += `<tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button class="delete-blog"
                    data-id="${blog.id}">Xóa</button>
                </td>
            </tr>`; 
        })
    } 
} 
const addNewRowToEnd = (blog) => {

    const tableBody = document.querySelector('#blogs tbody'); 

    // Tạo phần tử dòng mới 
    const newRow = document.createElement('tr'); 
    // Gán HTML cho dòng 
    newRow.innerHTML = ` 
   <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button class="delete-blog"
                    data-id="${blog.id}">Xóa</button>
                </td>
            </tr>`; 
    // Thêm dòng vào cuối bảng 
    tableBody.appendChild(newRow); 

    //gan su kien onClick cho row vua tao
    const btn = document.querySelector(`[data-id="${blog.id}"]`)
     btn.addEventListener("click", async() => {
                const id = btn.getAttribute("data-id")
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE', 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const data = await rawResponse.json();
                //delete row
                const row = btn.closest("tr")
                row.remove()
            })

}
const handleAddNewBlog = () => {
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const content = document.getElementById("content")
    const saveBlogBtn = document.getElementById("saveBlog")
    saveBlogBtn.addEventListener("click", async() => {         
        //call api to add a new blog
        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRowToEnd(data)
        console.log("phan hoi api ",data);
    })

}

const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog")
    if (btns) {
        btns.forEach((btn, index) => {
            btn.addEventListener("click", async() => {
                const id = btn.getAttribute("data-id")
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE', 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const data = await rawResponse.json();
                //delete row
                const row = btn.closest("tr")
                row.remove()
            })

        })
    }
}


fetchBlogs().then(() => {
    handleDeleteBtns()
})
handleAddNewBlog()

