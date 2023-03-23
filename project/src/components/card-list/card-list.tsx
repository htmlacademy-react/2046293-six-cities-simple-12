import Card from '../card/card';
import { Offers } from '../../types/offer';
import { useState } from 'react';


type CardListProps = {
    offers: Offers;
}

function CardList({offers}: CardListProps): JSX.Element {
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=>(
        <Card
          key={offer.id}
          offer={offer}
          activeId={activeId}
          onMouseOverHandler={() => setActiveId(offer.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
