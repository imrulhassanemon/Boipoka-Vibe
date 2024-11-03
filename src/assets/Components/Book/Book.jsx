import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl p-6">
          <figure className="bg-gray-300 rounded-2xl">
            <img
              className=" h-[266px] object-fill py-8"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex gap-5">
              {/* <div className="badge badge-info">Young Adult</div> */}
              {tags.map((tag, index) => (
                <div key={index} className="badge badge-info">{tag}</div>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p className="font-semibold">By: {author}</p>
            <div className="border-t-2 border-dotted text-black"></div>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{category}</div>
              <div className=" flex items-center">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-200"
                  />
                </div>
                <span className="font-semibold">{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
