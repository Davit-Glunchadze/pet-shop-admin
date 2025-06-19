import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import AdminPetsPage from "./pages/AdminPetsPage";
import AdminAddPetPage from "./pages/AdminAddPetPage";
import AdminCategoriesPage from "./pages/AdminCategoriesPage";
import AdminAddCategoryPage from "./pages/AdminAddCategoryPage";
import PetDetailsPage from "./pages/PetDetailsPage";

const App = () => {
  return (
    <Router>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminPetsPage />} />
        <Route path="/add" element={<AdminAddPetPage />} />
        <Route path="/add-pet/:id" element={<AdminAddPetPage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
        <Route path="/categories" element={<AdminCategoriesPage />} />
        <Route path="/add-category" element={<AdminAddCategoryPage />} />
        <Route path="/add-category/:id" element={<AdminAddCategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
