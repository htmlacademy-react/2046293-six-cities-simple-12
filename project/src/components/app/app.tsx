import Main from '../../pages/main/main';

type MainScreenProps = {
  numberOffers: number;
}

function App({numberOffers}: MainScreenProps): JSX.Element {
  return (
    <Main numberOffers={numberOffers}/>
  );
}
export default App;
