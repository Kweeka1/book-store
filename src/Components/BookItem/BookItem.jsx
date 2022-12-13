/* eslint-disable react/prop-types */
import './bookItem.scss';

const BookItem = ({ bookDetails, handleDeleteBook }) => (
  <div className="book-item">
    <div className="book">
      <div className="book-details">
        <p>{bookDetails.category}</p>
        <h2>{bookDetails.title}</h2>
        <h5>{bookDetails.author}</h5>
      </div>
      <div className="book-actions">
        <button type="button">Comments</button>
        <button onClick={handleDeleteBook} type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <div className="circular-progress-container">
        <div
          style={{
            background: `conic-gradient(#e8e8e8 -40%, #347dbf -40%, #347dbf ${bookDetails.percentage}%, #e8e8e8 ${bookDetails.percentage}%)`,
          }}
          className="circular-progress"
        />
        <div className="progress-info">
          <span className="progress-percentage">
            {`${bookDetails.percentage}%`}
          </span>
          <p className="progress-status">Completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <div className="chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p>Chapter 17</p>
        </div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

export default BookItem;
