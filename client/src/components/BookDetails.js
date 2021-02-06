import React from 'react';
import { gql, useQuery } from '@apollo/client';

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

function BookDetails() {
  const { loading, error, data } = useQuery(getBookQuery);
  return(
    <div id="book-details">
            <h2>{ data.book.name }</h2>
            <p>{ data.book.genre }</p>
            <p>{ data.book.author.name }</p>
            <p>All books by this author:</p>
            <ul className="other-books">
                { data.book.author.books.map(item => {
                    return <li key={item.id}>{ item.name }</li>
                })}
            </ul>
        </div>
    );
}

export default BookDetails;