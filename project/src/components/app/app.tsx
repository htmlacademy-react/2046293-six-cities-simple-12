import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import PageError from '../page-error/page-error';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import { City } from '../../types/points';
import Room from '../../pages/room/room';

type AppProps = {
  placeSelection: number;
  places: Offers;
  city: City;
}

function App(props: AppProps): JSX.Element {
  const {placeSelection, places, city} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placeSelection={placeSelection} places={places} city={city}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Room />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<PageError/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
