import { Footer } from "components/footer";
import { Header } from "components/header";
import { Newsletter } from "components/newsletter";
import { ShowCase } from "components/show-case";
import { Slide } from "components/slide-show/slide";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Slide />
        <ShowCase />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
