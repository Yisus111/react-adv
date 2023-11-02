import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import LazyPAge1 from '../pages/LazyPage1';
import LazyPage2 from '../pages/LazyPage2';
import LazyPage3 from '../pages/LazyPage3';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="page1" className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage1</NavLink>
        </li>
        <li>
          <NavLink to="page2" className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage2</NavLink>
        </li>
        <li>
          <NavLink to="page3" className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="page1" element={<LazyPAge1 />} />
        <Route path="page2" element={<LazyPage2 />} />
        <Route path="page3" element={<LazyPage3 />} />

        <Route path="*" element={<LazyPAge1 />} />
      </Routes>
    </div>
  )
}

export default LazyLayout;
