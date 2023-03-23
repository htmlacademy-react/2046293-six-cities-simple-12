import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import PageError from '../page-error/page-error';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import Room from '../../pages/room/room';

type AppProps = {
  numberOffers: number;
  offers: Offers;
}

function App({numberOffers, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main numberOffers={numberOffers} offers={offers}/>}
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
