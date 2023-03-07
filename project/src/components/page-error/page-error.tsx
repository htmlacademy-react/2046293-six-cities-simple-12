import { Fragment } from 'react';
import Header from '../header/header';

function PageError (): JSX.Element {
  return (
    <Fragment>
      <Header />
      <section className="container">
        <h1> Error 404</h1>
      </section>

    </Fragment>
  );
}

export default PageError;
