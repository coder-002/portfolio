import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
