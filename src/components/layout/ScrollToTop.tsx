import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    try {
      window.gtag?.("config", "G-TXM3NPNPJ0", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    } catch { /* no-op */ }
  }, [pathname]);
  return null;
};
