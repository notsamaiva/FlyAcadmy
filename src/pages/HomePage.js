// src/pages/HomePage.js

import React from 'react';
import { Box } from '@mui/material';
import MainNav from '../components/MainNav';
import Content from '../components/Content'; // Ensure the path is correct
import TopNav from '../components/TopNav'; // Assuming you have a TopNav component
import Explore from '../components/Explore';
import CategorySection from '../components/CategorySection';
import RecommendedCourses from '../components/RecommendedCourses';
import Footer from '../components/Footer';
import CommunitySection from '../components/CommunitySection';
import AboutSection from '../components/AboutSection';
import ForumPage from './ForumPage';

const HomePage = () => {
  return (
    <Box sx={{ fontFamily: 'Poppins, sans-serif' }}>
      
      <Content />
      <AboutSection />
      <CategorySection />
      <Explore />
      <RecommendedCourses />
      <CommunitySection />
      <Footer />

    </Box>
  );
};

export default HomePage;
