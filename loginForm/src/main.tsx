import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
