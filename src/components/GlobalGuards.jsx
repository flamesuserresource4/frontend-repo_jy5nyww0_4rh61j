import { useEffect } from "react";

// This component installs global listeners to gracefully handle noisy errors
// from third-party extensions (e.g., contentScript.js, prompt.js) so they
// don't interfere with app interactions.
export default function GlobalGuards() {
  useEffect(() => {
    const onError = (event) => {
      const msg = String(event?.message || "").toLowerCase();
      const src = String(event?.filename || "").toLowerCase();
      if (src.includes("contentscript.js") || msg.includes("contentscript.js")) {
        // Prevent extension script errors from bubbling
        event.preventDefault?.();
        return false;
      }
      if (msg.includes("identifier 'originalprompt' has already been declared") || msg.includes("prompt.js")) {
        event.preventDefault?.();
        return false;
      }
      return undefined;
    };

    const onUnhandledRejection = (event) => {
      const reason = String(event?.reason || "").toLowerCase();
      if (
        reason.includes("contentscript.js") ||
        reason.includes("a listener indicated an asynchronous response") ||
        reason.includes("cannot read properties of undefined (reading 'sentence')")
      ) {
        event.preventDefault?.();
        return false;
      }
      return undefined;
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
