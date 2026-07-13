import "./App.scss";
import { NavBar } from "./components/layout/NavBar";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";
import { ColorsSection } from "./components/sections/ColorsSection";
import { TypographySection } from "./components/sections/TypographySection";
import { ButtonsSection } from "./components/sections/ButtonsSection";
import { CardsSection } from "./components/sections/CardsSection";
import { BadgesSection } from "./components/sections/BadgesSection";
import { FormsSection } from "./components/sections/FormsSection";
import { AlertsSection } from "./components/sections/AlertsSection";
import { BubblesSection } from "./components/sections/BubblesSection";
import { ControlsSection } from "./components/sections/ControlsSection";
import { AvatarTooltipsSection } from "./components/sections/AvatarTooltipsSection";
import { TabsSection } from "./components/sections/TabsSection";
import { TableSection } from "./components/sections/TableSection";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />

      <div className="app__content">
        <ColorsSection />
        <TypographySection />
        <ButtonsSection />
        <CardsSection />
        <BadgesSection />
        <FormsSection />
        <AlertsSection />
        <BubblesSection />
        <ControlsSection />
        <AvatarTooltipsSection />
        <TabsSection />
        <TableSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
