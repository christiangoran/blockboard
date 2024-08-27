import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import { useCurrentUser } from "./context/CurrentUserContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const currentUser = useCurrentUser();
  return (
    <>
      <div className="pt-[4.75] lg:pt-[5.25] overflow-hidden">
        <Header key={currentUser?.profile_image} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login/" element={<LoginPage />} />
        </Routes>
        <ButtonGradient />
      </div>
    </>
  );
};

export default App;
