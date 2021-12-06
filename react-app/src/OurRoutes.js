import React from 'react';
import { Routes, Route } from 'react-router';
import Hero from './components/Hero';
import Post from './components/Post';
import session from './services/session';

const About = () => <h1 className="title">Welcome to the About Page</h1>
const Home = () => <Hero title="Home Page" subtitle="The main page" />
const Feed = () => <Post post={ {
    src: 'https://bulma.io/images/placeholders/1280x960.png',
    user: session.user
} } />
const Users = () => <Hero title="Users Page" subtitle="The lists of users page" />

export default function OurRoutes(){
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/feed" element={ <Feed /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/login" element={ <Home /> } />
            <Route path="/users" element={ <Users /> } />
        </Routes>
)}