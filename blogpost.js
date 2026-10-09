const createPost = (title, content) => {
    //select ul
    const blogList = document.getElementById("blog-list")
    //create li (card of each post)
    const post = document.createElement("li")

    //title element
    const postTitle = document.createElement("h3")
    postTitle.textContent = title

    //edit title btn
    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) =>{
        editTitle(e.target.parentElement)
    })

    //content element
    const postContent = document.createElement("p")
    postContent.textContent = content

    //edit content btn
    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", (e) =>{
        editContent(e.target.parentElement)
    })

    //delete btn
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Button"
    deleteBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    })

    //apppend elemeents in the li
    post.appendChild(postTitle)
    post.appendChild(editTitleBtn)
    post.appendChild(postContent)
    post.appendChild(editContentBtn)
    post.appendChild(deleteBtn)

    //append li into ul
    blogList.appendChild(post)

    //The li handle element by:
    // 1. title (h3)
    // 2. delete btn 
    // 3. content (p)
    // 4. edit content btn 
    // 5. delete btn
}


// add post function 
const addPost = () => {
    const title = prompt("Enter your post title: ")
    const content = prompt("Enter your post content: ")

    //make sure both title and content promt was fill before create a post card
    if (title && content) {
        createPost(title, content)
    }
}

// edit title function
const editTitle = (target) => {
    //h3 (title) is a child of li 
    const postTitle = target.childNodes[0]

    //prompt a new title string
    const newTitle = prompt("Input your new title: ", postTitle.textContent)

    //overwrite the old title
    if (newTitle){
        postTitle.textContent = newTitle
    }
}

// edit content function
const editContent = (target) => {
    const postContent = target.childNodes[2]
    const newContent = prompt("Input the new content: ", postContent.textContent)

    if (newContent) {
        postContent.textContent = newContent
    }
}

// delete post function
const deletePost = (target) => {
    //
    const postTitle = target.childNodes[TITLE].textContent

    //prompt a confirm alert
    const toDelete = confirm(`Do you want to delete "${postTitle}" blog post?`)

    if (toDelete){
        //remove that li 
        target.remove()
        alert(`Post ${postTitle} is deleted!`)
    }
}

// window onload
window.onload = () => {
    //init data
    let blogPosts = [
        {title: "First Blog Post", content: "Welcome to my blog! This is my very first post."},
        {title: "Learning JavaScript", content: "Today I learned how to change the page using the DOM and event listeners."},
        {title: "Why I Like Coding", content: "Building small projects helps me understand how websites really work."}
    ]

    //map each post into a card
    blogPosts.map((post) => createPost(post.title, post.content))

    //
    let addPostBtn = document.getElementById("add-post-btn")
    addPostBtn.addEventListener("click", addPost)
