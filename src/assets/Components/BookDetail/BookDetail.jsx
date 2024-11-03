import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadLiat } from "../../../Uitlity/AddtoDb";

const BookDetail = () => {
  const { bookId } = useParams();
  console.log(bookId);
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
  } = book;
  const handelMarkRead = (id) =>{
    /* 
        * Undestand what to store or save => bookId
        * Where to Store: database, localStorage
        * array, list, collection: 
        * check if the book is already in the readList.
        * If not, then add the book to the list 
        * If Yes, do not add the book 
    */
   addToStoreReadLiat(id)
   
  }
  return (
    <div className="flex gap-5">
      <div>
        <img className="w-" src={image} alt="" />
      </div>
      <div className="my-12">
        <h1 className="text-5xl font-bold">{bookName}</h1>
        <div className="divider"></div>
        <p>
          <span className="font-semibold">By: </span>
          {author}
        </p>
        <div className="divider"></div>
        <p>{category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review: </span>
          {review}
        </p>
        <div className="my-3">
          <button onClick={() =>handelMarkRead(bookId)} className="btn btn-outline mr-4 btn-warning ">
            Mark As Red
          </button>
          <button className="btn  btn-accent">Ad To WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
