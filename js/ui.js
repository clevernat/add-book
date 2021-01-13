// class UI {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }

//     addBookToList(title, author, isbn) {
//         // Add book
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//         <td>${title}</td>
//         <td>${author}</td>
//         <td>${isbn}</td>
//         <td>
//             <a class="delete-icon">
//                 <i class="fas fa-trash-alt"></i>
//             </a>
//         </td>
//         `
//         const bookList = document.querySelector('#book-list');
//         bookList.insertAdjacentElement('beforeend', tr);
//     }

//     clearFields() {
//         document.querySelector('#title').value = '';
//         document.querySelector('#author').value = '';
//         document.querySelector('#isbn').value = '';
//     }

//     alert(message, className) {
//         const div = document.createElement('div');
//         div.classList.add(className, 'remove');
//         div.appendChild(document.createTextNode(message));

//         const bookForm = document.querySelector('.insertAlert');
//         const thead = document.querySelector('.thead');

//         bookForm.insertBefore(div, thead);
//         // console.log(div);

//         // Set time out
//         setTimeout(function() {
//            document.querySelector(`.${className}`).remove();
//         }, 3000)

//     }
    
// }



class UI {

    constructor() {
        this.title = document.querySelector('#title');
        this.author = document.querySelector('#author');
        this.isbn = document.querySelector('#isbn');
    }

    addBookToList() {
        const title = this.title.value;
        const author = this.author.value;
        const isbn = this.isbn.value;

        // Create Element
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td> <a class="delete-icon"><i class="fas fa-trash-alt"></i></a></td>
        `
            const bookList = document.querySelector('#book-list');
            bookList.appendChild(tr);

        // this.clearFields();
        
    }


    clearFields() {
        this.title.value = '';
        this.author.value = '';
        this.isbn.value = '';
    }


    alert(message, className) {
        const div = document.createElement('div');
        div.classList.add(className);
        // div.className = 'samuel'
        div.appendChild(document.createTextNode(message));

        const bookForm = document.querySelector('.insertAlert');
        const thead = document.querySelector('.thead');

        bookForm.insertBefore(div, thead);
        // console.log(div)

        // timeout
       setTimeout(function() {
            document.querySelector(`.${className}`).remove();
       }, 2000);
    }

    
}




















