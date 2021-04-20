import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const { dispatch } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: "ADD_BOOK", book: {
            title, author
        }});

        setTitle("");
        setAuthor("");
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <label>Book title:</label>
            <input type="text" placeholder="Book title" value={ title } required onChange={ (e) => setTitle(e.target.value) } />
            <label>Author:</label>
            <input type="text" placeholder="Author" value={ author } required onChange={ (e) => setAuthor(e.target.value) } />
            <input type="submit" value="Add book" />
        </form>
    );
}
 
export default BookForm;
