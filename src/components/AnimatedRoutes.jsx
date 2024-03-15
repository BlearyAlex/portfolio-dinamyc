import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import Projects from '../pages/Admin/Projects';
import ProjectsForm from '../pages/Admin/ProjectsForm';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import ExperiencePage from '../pages/ExperiencePage';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';

import { Route, Routes } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    return (
        <AnimatePresence>
            <Routes initial={true} mode='wait'>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path='/experience' element={<ExperiencePage />} />
                <Route path='/contact' element={<ContactPage />} />

                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/admin/projects' element={<Projects />} />
                <Route path='/admin/projects/new' element={<ProjectsForm />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </AnimatePresence >
    )
}

export default AnimatedRoutes