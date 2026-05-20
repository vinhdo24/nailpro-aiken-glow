import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SocialDock } from "./SocialDock";
import { MessengerButton } from "./MessengerButton";
import { StickyBookingBar } from "./StickyBookingBar";
import { ScrollToTop } from "./ScrollToTop";

export const SiteLayout = () => (
  <div className="min-h-screen flex flex-col">
    <ScrollToTop />
    <Header />
    <main className="flex-1 pt-16 pb-20 md:pb-0">
      <Outlet />
    </main>
    <Footer />
    <SocialDock />
    <MessengerButton />
    <StickyBookingBar />
  </div>
);
