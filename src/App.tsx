import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import TicketPage from "./pages/Ticketpage.js";
import EventRegistrationPage from "./pages/events-page.tsx";

import TicketVerification from "./pages/TicketVerification.js";
const App = () => {
  return (
    <div className="bg-[#000022] h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify-ticket" element={<TicketVerification />} />
          <Route path="/create-event" element={<TicketPage />} />
          <Route path="/events/:id" element={<EventRegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
