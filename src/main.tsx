import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import WorkDetail from "./app/pages/WorkDetail.tsx";
import { TransitionProvider } from "./app/components/TransitionContext.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TransitionProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </TransitionProvider>
  </BrowserRouter>
);