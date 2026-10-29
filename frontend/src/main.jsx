import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ShareContext from "./contextAPI/ShareContext.jsx";
import RouteGuard from "./contextAPI/RouteGuard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="855781800100-ejmq1s2get627cobcst07pjcgo2dom4r.apps.googleusercontent.com">
        <ShareContext>
          <RouteGuard>
            <App />
          </RouteGuard>
        </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
