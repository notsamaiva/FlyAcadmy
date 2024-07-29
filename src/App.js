import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNav from './components/MainNav';
import TopNav from './components/TopNav'; // Assuming you have a TopNav component
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import CoursesPage from './pages/CoursesPage';
import CategoriesPage from './pages/CategoriesPage';
import CommunitySection from './components/CommunitySection';

const App = () => {
  return (
    <Router>
      <TopNav />
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mes-cours" element={<CoursesPage />} />
        <Route path="/mes-catégories" element={<CategoriesPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/community" element={<CommunitySection />} />
      </Routes>
    </Router>
  );
};

export default App;
