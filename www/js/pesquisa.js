document.querySelector('.pesquisa-formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    searchBooks();
});

function searchBooks() {
    var searchQuery = document.getElementById('campo-pesquisa').value;
    var apiKey = 'AIzaSyAvkiIv8uKC_n05_NqKahfTe0Swg5br6Ng'; 
    var maxResults = 40; 

    var apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${maxResults}&key=${apiKey}`;
  
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayResults(data);
        })
        .catch(function(error) {
            console.log('Erro ao buscar livros: ', error);
        });
}

function generateRandomValue() {
    var randomValue = Math.floor(Math.random() * 9900) + 1;
    return (randomValue / 100).toFixed(2);
}

function displayResults(data) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!data || !data.items || data.items.length === 0) {
        resultsDiv.innerHTML = 'Nenhum resultado encontrado.';
        return;
    }

    var books = data.items;

    for (var i = 0; i < books.length; i++) {
        var book = books[i].volumeInfo;
        var title = book.title;
        var authors = book.authors ? book.authors.join(', ') : 'Autor desconhecido';
        var description = book.description ? book.description : 'Descrição não disponível';
        var thumbnail = book.imageLinks ? book.imageLinks.thumbnail.replace("http://", "https://") : '';

        if (thumbnail) {
            var bookElement = document.createElement('div');
            bookElement.className = 'book-box';
            bookElement.innerHTML = `
                <img class="book-cover" src="${thumbnail}" alt="${title} capa">
                <h2 class="book-title">${title}</h2>
                <p class="book-value">Valor: ${generateRandomValue()}</p>
                <button class="about-button" data-title="${title}" data-authors="${authors}" data-publisher="${book.publisher}" data-description="${description}" data-preview-link="${book.previewLink.replace("http://", "https://")}">Sobre</button>
            `;
            
            resultsDiv.appendChild(bookElement);

            bookElement.querySelector('.about-button').addEventListener('click', function() {
                var modal = document.getElementById('bookModal');
                var title = this.getAttribute('data-title');
                var authors = this.getAttribute('data-authors');
                var publisher = this.getAttribute('data-publisher');
                var description = this.getAttribute('data-description');
                var previewLink = this.getAttribute('data-preview-link');
                var imageSrc = this.parentNode.querySelector('.book-cover').getAttribute('src');
            
                document.getElementById('modalTitle').textContent = title;
                document.getElementById('modalAuthors').textContent = authors;
                document.getElementById('modalPublisher').textContent = publisher;
                document.getElementById('modalDescription').textContent = description;
                document.getElementById('modalPreviewLink').setAttribute('href', previewLink);
                document.getElementById('modalImage').setAttribute('src', imageSrc);
            
                modal.style.display = 'block';
            
                document.getElementById('closeModal').addEventListener('click', function() {
                    modal.style.display = 'none';
                });
            });            
        }
    }
}