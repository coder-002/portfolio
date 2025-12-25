import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import { siteConfig } from "./config";

function App() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <title>
            {siteConfig.name} - {siteConfig.title}
          </title>
        </head>
        <body>
          <Header />
          <section>
            <Hero />
            <About />
            <Project />
            <Experience />
            <Education />
          </section>
          <Footer />
        </body>
      </html>
    </>
  );
}

export default App;
