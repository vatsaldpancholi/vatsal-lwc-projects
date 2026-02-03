import { LightningElement } from 'lwc';
const BOOK_URL = 'https://gutendex.com/books/?search='

export default class BookListingApp extends LightningElement {

    query;
    books;
    timer;
    connectedCallback(){
        this.fetchBookData()
    }

    fetchBookData(){

        const fetchValue = `${BOOK_URL}${encodeURIComponent(this.query)}&limit=5`;
        fetch(fetchValue)
        .then(response => response.json())
        .then(data => {
            console.log("data ",data)
            this.books = (data.results || []).map(book => ({
                id: book.id,
                title: book.title,
                authors: book.authors ? book.authors.map(a => a.name).join(', ') : 'Unknown',
                imageUrl: book.formats?.['image/jpeg'] || null
}));
        })
        .catch(error => console.error(error))
    }

    fetchBooksHandler(event){
        this.query = event.target.value;
        window.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.fetchBookData()
        }, 1000);
    }
}