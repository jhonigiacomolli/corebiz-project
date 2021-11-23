import { Footer } from "components/footer";
import { Header } from "components/header";
import { Newsletter } from "components/newsletter";
import { Slide } from "components/slide-show/slide";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Slide />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
