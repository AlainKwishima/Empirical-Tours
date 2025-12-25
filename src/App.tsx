import React from "react";
import { AboutPage } from "./pages/About/AboutPage";
import { ToursPage } from "./pages/Tours/ToursPage";
import { DestinationsPage } from "./pages/Destinations/DestinationsPage";
import { BlogPage } from "./pages/Blog/BlogPage";
import { FaqPage } from "./pages/Faq/FaqPage";
import { ContactPage } from "./pages/Contact/ContactPage";

type PageKey = "about" | "tours" | "destinations" | "blog" | "faq" | "contact";

const App: React.FC = () => {
  const [page, setPage] = React.useState<PageKey>("about");

  const handleNavigate = (next: PageKey) => {
    setPage(next);
  };

  if (page === "about") {
    return <AboutPage onNavigate={handleNavigate} currentPage={page} />;
  }
  if (page === "tours") {
    return <ToursPage onNavigate={handleNavigate} currentPage={page} />;
  }
  if (page === "destinations") {
    return <DestinationsPage onNavigate={handleNavigate} currentPage={page} />;
  }
  if (page === "blog") {
    return <BlogPage onNavigate={handleNavigate} currentPage={page} />;
  }
  if (page === "faq") {
    return <FaqPage onNavigate={handleNavigate} currentPage={page} />;
  }

  return <ContactPage onNavigate={handleNavigate} currentPage={page} />;
};

export default App;

