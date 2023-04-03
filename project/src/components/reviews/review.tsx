import { Review } from '../../types/review';

type ReviewsCard = {
    review: Review;
};

function ReviewCard ({review}: ReviewsCard): JSX.Element {
  const {comment, date, rating, user} = review;
  const {avatarUrl, name} = user;
  const starRating = `${Math.round(rating) / 5 * 100}%`;
  const newDate = new Date(date);
  const dateFormat = newDate.toLocaleDateString('ru-RU');

  return (

    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateFormat}>{dateFormat}</time>
      </div>
    </li>

  );
}

export default ReviewCard;
