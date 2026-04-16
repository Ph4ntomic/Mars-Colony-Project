import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthService } from './utils/AuthService.ts';

import Overview from './pages/Overview';
import Vehicles from './pages/Vehicles';
import Employees from './pages/Employees';
import SqlOverview from './pages/SqlOverview';
import Ressources from './pages/Ressources';
import LoginPage from './pages/Login';
import Citizens from './pages/Citizens.tsx';
import Cities from './pages/Cities.tsx';
import Layout from './components/Layout.tsx';

function App() {
  const auth = new AuthService('https://hsbi.cyzetlc.de/dev/api/login.php');
  document.getElementById('login-btn')?.addEventListener('click', () => auth.login());

  if (!AuthService.isLoggedIn()) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="vehicles" element={<Vehicles />} />
            {/*<Route path="rover/:name" element={<Rover />} />*/}
            <Route path="employees" element={<Employees />} />
            <Route path="sql" element={<SqlOverview />} />
            <Route path="ressources" element={<Ressources />} />
            <Route path="citizens" element={<Citizens />} />
            <Route path="cities" element={<Cities />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <LoginPage />
    );
  }
}

export default App;