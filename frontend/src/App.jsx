import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // imports routing components from react router dom
// importing files
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AddStudent from "./components/AddStudent";
import AdvertisementList from "./components/AdvertisementList";
import AddAdvertisement from "./components/AddAdvertisement";
import AddIdea from "./components/AddIdea";
import "./App.css";
import TalentPage from "./components/TalentPage";
import TalentDashboard from "./components/TalentDashboard";
import StartupPage from "./components/StartupPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/AuthButtons";

function App() {
  return (
    // Enables routing
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <main>
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/add" element={<AddStudent />} />
                <Route path="/post-idea" element={<AddIdea />} />
                <Route path="/post-ad" element={<AddAdvertisement />} />
              </Route>
              <Route path="/home" element={<HomePage />} />
              <Route path="/advertisements" element={<AdvertisementList />} />
              <Route path="/talent" element={<TalentPage />} />
              <Route path="/talentD" element={<TalentDashboard />} />
              <Route path="/startup" element={<StartupPage />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </AuthProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
