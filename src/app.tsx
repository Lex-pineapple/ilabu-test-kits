import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "#/layouts/layout";
import { ActivateQR } from "#/views/activate-qr";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<ActivateQR />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
