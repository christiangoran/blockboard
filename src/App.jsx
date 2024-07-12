import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { useCurrentUser } from "./context/CurrentUserContext";

const App = () => {
  const currentUser = useCurrentUser();
  return (
    <>
      <div className="pt-[4.75] lg:pt-[5.25] overflow-hidden">
        <Header key={currentUser?.profile_image} />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
