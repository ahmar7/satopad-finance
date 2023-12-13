import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Faqs from '../pages/faqs'
import ProjectDetail from "../pages/projectDetails";
import LaunchPad from '../pages/launchPad';
import Staking from '../pages/staking';
import Governance from '../pages/governance';
import Swap from '../pages/swap';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="faqs" element={<Faqs />} />
        <Route index path="public-sale" element={<ProjectDetail />} />
        <Route index path="launchpad" element={<LaunchPad />} />
        <Route index path="staking" element={<Staking />} />
        <Route index path="governance" element={<Governance />} />
        <Route index path="swap" element={<Swap />} />
      </Routes>
    </BrowserRouter>
  );
}
