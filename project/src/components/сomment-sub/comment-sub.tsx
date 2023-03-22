/* eslint-disable no-console */
import { useState } from 'react';

const RATING = [5, 4, 3, 2, 1];

type StringOrNum = string | number;

function CommentSub (): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const fieldChangeHandle = (event: { target: { name: string; value: StringOrNum } }): void => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };
  console.log(formData);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((rating)=>(
          <>
            <input key='rating' className="form__rating-input visually-hidden" name="rating" onChange={fieldChangeHandle} value={`${rating}`} id={`${rating}-stars`} type="radio" />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea

        onChange={fieldChangeHandle}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"

      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentSub;
