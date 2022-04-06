import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import SinglePage from './pages/SinglePage';
import Contacts  from './pages/Contacts';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import  Layout  from './components/Layout';

import RequireAuth from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects-art' element={<Navigate to='/projects' replace />} />
          <Route path='skills' element={<Skills />} />
          <Route path='posts' element={<Blog />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='posts/:id/edit' element={<EditPost />} />
          <Route path='posts/new' element={
          <RequireAuth>
            <CreatePost />
            </RequireAuth>
          } />
          <Route path='login' element={<Login />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
