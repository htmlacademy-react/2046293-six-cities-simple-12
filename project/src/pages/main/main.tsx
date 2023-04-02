import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import Filters from '../../components/filters/filters';
import Map from '../../components/map/map';
import { Offers, Offer } from '../../types/offer';
import { City } from '../../types/points';
import { useState } from 'react';

type MainScreenProps = {
  placeSelection: number;
  places: Offers;
  city: City;
}

function Main(props: MainScreenProps): JSX.Element {
  const {placeSelection, places, city} = props;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined> (
    undefined
  );

  const onListItemHover = (id: number) => {
    const currentPoint = places.find((offer) =>
      offer.id === id,
    );
    setSelectedPoint(currentPoint);
  };


  return (
    <body className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Filters />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeSelection} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex ={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex ={0}>Price: low to high</li>
                  <li className="places__option" tabIndex ={0}>Price: high to low</li>
                  <li className="places__option" tabIndex ={0}>Top rated first</li>
                </ul>
              </form>
              <CardList offers={places} onListItemHover={onListItemHover}/>
            </section>
            <Map city={city} places={places} selectedPoint={selectedPoint}/>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Main;
