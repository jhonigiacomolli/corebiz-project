import { Footer } from "components/footer";
import { Header } from "components/header";
import { Newsletter } from "components/newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
