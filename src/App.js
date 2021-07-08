import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import AddDepositForm from './Pages/AddDepositForm/AddDepositForm';
import DepositsList from './Pages/DepostisList/DepositsList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={AddDepositForm} />
        <Route path="/depositsList" component={DepositsList} />
      </Switch>
    </div>
  );
};

export default App;
