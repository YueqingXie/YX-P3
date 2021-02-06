import React, {useState} from 'react';
import {gql, useQuery, useMutation} from '@apollo/client';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;
const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const displayAuthors = (loading, data) =>{
    if(loading){
        return( <option disabled>Loading authors</option> );
    }else{
        return data.authors.map(author =>{
            return (<option key={author.id} value={author.id}>{author.name}</option>)
        })
    }
}
const AddBook =() =>{
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const { loading, data } = useQuery(getAuthorsQuery);
    const [addBookMut] = useMutation(addBookMutation);
    const handleSubmit = (e) => {
        e.preventDefault();
        addBookMut({
            variables: {
              name: name,
              genre: genre,
            //   authorId: authorId,
              authorId: "600380347ffed61e7b7618ef",
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    };
    return(
        <div className="center container section" id="hhh">
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Chapter name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Content:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}  />
            </div>
            {/* <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} >
                    <option>Select author</option>
                    { displayAuthors(loading, data) }
                </select>
            </div> */}
            <div className="btnn">
                <button>Add</button>

            </div>
        </form>
        </div>
    )
}

export default AddBook


// import React from 'react';
// import { gql, useQuery } from '@apollo/client';

// const getAuthorsQuery = gql`
//     {
//         authors {
//             name
//             id
//         }
//     }
// `;

// function DisplayAuthors(){
//     const { loading, error, data } = useQuery(getAuthorsQuery);
//     if(loading){
//         return( <option disabled>Loading authors</option> );
//     } else {
//         return data.authors.map(author => {
//             return( <option key={ author.id } value={author.id}>{ author.name }</option> );
//         });
//     }    
// }

// function AddBook() {
//     return (
//         <form id="add-book">
//             <div className="field">
//                 <label>Book name:</label>
//                 <input type="text" />
//             </div>
//             <div className="field">
//                 <label>Genre:</label>
//                 <input type="text" />
//             </div>
//             <div className="field">
//                 <label>Author:</label>
//                 <select>
//                     <option>Select author</option>                       
//                     { DisplayAuthors() }
//                 </select>
//             </div>
//             <button>+</button>
//         </form>
//     )      
// }

// export default AddBook;
