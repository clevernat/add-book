// // Instantiate UI
// const bookForm = document.querySelector('#book-form');


// bookForm.addEventListener('submit', addBookToList);

// function addBookToList(e) {
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const isbn = document.querySelector('#isbn').value;

//         // Instantiate UI
//     const ui = new UI(title, author, isbn);
   
 
//     if(title != '' && author != '' && isbn != '') {
        
//         // Add book to ui
//         ui.addBookToList(ui.title, ui.author, ui.isbn);

//         // Clear Fields
//         ui.clearFields();

//         // Alert
//         ui.alert('Book Added', 'success')
         
//     }else{
//         // if(document.querySelector('.remove')) {
//         //     document.querySelector('div.error').remove();

            
//         // }

//         ui.alert('Please Add Book', 'error');

       
       
//     }
   
    

//     e.preventDefault();
// }


// // Delete Item
// const bookList = document.querySelector('#book-list');

// bookList.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     // console.log(e.target.parentElement.classList.contains('delete-icon'))
//     if(e.target.parentElement.classList.contains('delete-icon')){
//         if(confirm('Are you sure you want to delete?')) {

//         }
//         document.querySelector('tr').remove();
//     }
//     e.preventDefault();
// }























// Instantiate UI
const ui = new UI;


const bookForm = document.querySelector('#book-form');
const bookList = document.querySelector('#book-list');



bookForm.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteItem)

// Add book to list
function addBook(e) {

    const title = this.title.value;
        const author = this.author.value;
        const isbn = this.isbn.value;

    if(title != '' && author != '' && isbn != '') {
             // add book
        ui.addBookToList();
        // clear input fields
        ui.clearFields();
        // Alerts
        ui.alert('BOOK ADDED!', 'success');
       
    }else{
        ui.alert('ALL FIELDS ARE REQUIRED!', 'error');
    }
    
    e.preventDefault();
}


// Delete item
function deleteItem(e){
   
    if(e.target.parentElement.classList.contains('delete-icon')) {
        if(confirm('ARE YOU SURE')) {
            e.target.parentElement.parentElement.parentElement.remove();
            ui.alert('BOOK DELETED!', 'error')
        }
    }
    e.preventDefault();
}



// year
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('footer span').innerHTML = new Date().getUTCFullYear()
})