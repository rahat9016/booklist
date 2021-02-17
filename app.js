const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submit.addEventListener('click', function(e){
    e.preventDefault()
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Vai kichu ekta den')
    }else{
        const newRow = document.createElement("tr");
        //Create New Title
        const newTitle = document.createElement("th")
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)
        //Create New Author
        const newAuthor = document.createElement("th")
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)
        //Create New Year
        const newYear = document.createElement("th")
        newYear.innerHTML = year.value
        newRow.appendChild(newYear)
        bookList.appendChild(newRow)
        
    }
   
})