import { Footer } from "components/footer";
import { Header } from "components/header";
import { CartContextProvider } from "components/hooks/cart";
import { Main } from "components/main";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
