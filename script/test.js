    
      const addButton = document.querySelectorAll('.book button');
      const myBooks = document.querySelector('#my-books');
      const searchLink = document.querySelector('#search-link');
      const loginLink = document.querySelector('#login-link');
      const searchForm = document.createElement('form');
      const searchInput = document.createElement('input');
      const searchButton = document.createElement('button');
      const redirectToLogin = () => {
          window.location.href = 'login.html';
        };

        searchInput.type = 'text';
        searchInput.placeholder = 'Search for books';
        searchButton.textContent = 'Search';

        searchForm.appendChild(searchInput);
        searchForm.appendChild(searchButton);

        searchLink.addEventListener('click', (e) => {
          e.preventDefault();
          const navItem = searchLink.parentNode;
          navItem.replaceChild(searchForm, searchLink);
        });

        loginLink.addEventListener('click', (e) => {
          e.preventDefault();
          redirectToLogin();
        });

        addButton.forEach((button) => {
          button.addEventListener('click', () => {
          });
        });

        addButton.forEach((button) => {
          button.addEventListener('click', () => {
            const book = button.parentNode;
            const title = book.querySelector('h3').textContent;
            const author = book.querySelector('p:first-of-type').textContent;

            const newBook = document.createElement('li');
            const bookInfo = document.createElement('span');
            const deleteButton = document.createElement('button');

            bookInfo.textContent = `${title} by ${author}`;
            deleteButton.textContent = 'Remove';

            newBook.appendChild(bookInfo);
            newBook.appendChild(deleteButton);
            myBooks.appendChild(newBook);

            button.textContent = 'Added';
            button.disabled = true;

            deleteButton.addEventListener('click', () => {
              myBooks.removeChild(newBook);
              button.textContent = 'Add to My Books';
              button.disabled = false;
            });
          });
        });

        searchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const searchKeyword = searchInput.value;
          console.log('Search keyword:', searchKeyword);
        });
    