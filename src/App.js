import CardsContainer from "./components/cardsContainer";
// import getProducts from "./actions/getProducts";
// import Cards from "./components/cards"
import Header from "./components/header"
import { UserProvider } from './context/userContext'
import "./styles.css"

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <CardsContainer />
      </UserProvider>
    </div>
  );
}

export default App;
