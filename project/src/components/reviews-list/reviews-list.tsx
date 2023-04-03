import Reviews from '../reviews/review';
import { REVIEW } from '../../mocks/reviews';

function ReviewsList (): JSX.Element {
  return (
    <ul className="reviews__list">
      {REVIEW.map((review)=> (
        <Reviews
          key={review.id}
          review={review}
        />))}
    </ul>
  );
}

export default ReviewsList;
