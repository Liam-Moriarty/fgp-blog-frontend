import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Announcement from "./pages/Announcement";

const App = () => {
  return (
    <main>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/announcement" element={<Announcement />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
