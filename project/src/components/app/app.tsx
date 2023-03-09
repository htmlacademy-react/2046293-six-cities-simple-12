import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import PageError from '../page-error/page-error';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  numberOffers: number;
}

function App({numberOffers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main numberOffers={numberOffers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
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
