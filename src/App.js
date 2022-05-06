import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/nav-bar/nav-bar.component";
import IntroSection from "./components/intro-section/intro-section.component";
import AboutMe from "./components/about-me-section/about-me.component";
import ContactMe from "./components/contact-me-section/contact-me.component";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MyNavBar />
      <IntroSection />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
