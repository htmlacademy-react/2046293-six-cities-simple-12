import Card from '../card/card';
import { Offers } from '../../types/offer';

type CardListProps = {
    offers: Offers;
    onListItemHover: (onListItemName: number) => void;
}

function CardList({offers, onListItemHover}: CardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=>(
        <Card
          key={offer.id}
          offer={offer}
          onMouseOverHandler={(id) => onListItemHover(id)}
        />
      ))}
    </div>
  );
}

export default CardList;
