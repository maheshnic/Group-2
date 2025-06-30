import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Apply from './pages/Apply';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        <Route path="/jobs/:jobId/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

