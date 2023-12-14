import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
