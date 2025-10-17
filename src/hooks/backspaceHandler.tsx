import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useBackspaceHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const tagName = target?.tagName?.toLowerCase();
      const isInput =
        tagName === "input" ||
        tagName === "textarea" ||
        target?.isContentEditable;

      if (isInput) return;

      const backKeys = ["Backspace", "Back", "BrowserBack", "GoBack", "Escape"];

      if (backKeys.includes(event.key)) {
        event.preventDefault();

        if (location.pathname === "/" || location.pathname === "/home") {
          return;
        }

        const previousPath = location.state?.from || "/";
        const previousFocusKey =
          location.state?.focusKey || "HOME_DEFAULT_FOCUS_KEY";

        navigate(previousPath, {
          state: {
            focusKey: previousFocusKey,
            from: null,
          },
          replace: true,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, location]);
};
