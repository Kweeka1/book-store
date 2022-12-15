import './bookItemLoading.scss';

const BookItemLoading = () => (
  <div className="book-item">
    <div className="book">
      <div className="book-details">
        <div className="skeleton text-genre" />
        <div className="skeleton text-title" />
        <div className="skeleton text-author" />
      </div>
      <div className="book-actions">
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton" />
      </div>
    </div>
    <div className="book-progress">
      <div className="circular-progress-container">
        <div className="circular-progress skeleton" />
        <div className="progress-info">
          <div className="progress-percentage skeleton" />
          <div className="progress-status skeleton" />
        </div>
      </div>
      <div className="book-chapter">
        <div className="chapter">
          <div className="current-chapter skeleton" />
          <div className="skeleton" />
        </div>
        <div className="button skeleton" />
      </div>
    </div>
  </div>
);

export default BookItemLoading;
