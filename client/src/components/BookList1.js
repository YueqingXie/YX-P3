import React, {useState}  from 'react';
import { gql, useQuery } from '@apollo/client';
// import BookDetails from './BookDetails';

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

function DisplayBooks(loading, data){
  const [state, setState] = useState('');
  if(loading){
      return( <option disabled>Loading books</option> );
  }else{
      return data.books.map(book => {
        return(
          <li key={ book.id } onClick={ (e) => setState({ selected: book.id }) }>{ book.name } - { book.genre }</li>
        );
      })
  }
}

const BookList1 = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
      return (
        <div>
          <ul id="book-list">
            { DisplayBooks(loading, data) }
          </ul>
          {/* <BookDetails  /> */}
<div className="right">
    <li id="nn"><a href="/duzhe" className="black-text">Back</a></li>      
        </div>
          
        </div>
        
        
      )
}

export default BookList1;


// import React from 'react';
// import { gql, useQuery } from '@apollo/client';
// import BookDetails from './BookDetails';

// const getBooksQuery = gql`
//   {
//     books {
//       name
//       id
//     }
//   }
// `;

// const displayBooks = (loading, data) =>{

//   if(loading){
//       return( <option disabled>Loading books</option> );
//   }else{
//       return data.books.map(book => {
//           return (<li key={ book.id }>{ book.name }</li>) 
//       })
//   }
// }

// const BookList = () => {

//   const { loading, error, data } = useQuery(getBooksQuery);
//   console.log(data);

//       return (
//         <div>
//           <ul id="book-list">
//             { displayBooks(loading, data) }
//           </ul>
          
//           <BookDetails />
//         </div>
          
//       )

// }

// export default BookList;
