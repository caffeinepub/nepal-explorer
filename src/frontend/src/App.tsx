import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryCards from "./components/CategoryCards";
import EmergencySection from "./components/EmergencySection";
import Footer from "./components/Footer";
import GuidesSection from "./components/GuidesSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HiddenGems from "./components/HiddenGems";
import HotelsSection from "./components/HotelsSection";
import PlacesSection from "./components/PlacesSection";
import TravelTipsSection from "./components/TravelTipsSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <CategoryCards />
          <PlacesSection />
          <HiddenGems />
          <HotelsSection />
          <GuidesSection />
          <TravelTipsSection />
          <EmergencySection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
