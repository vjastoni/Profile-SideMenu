import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import RootLayout from './layout/RootLayout';
import NotFound from './NotFound';
import HomePage from './pages/HomePage';
import FaqsPage from './pages/FaqsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndCondtion from './pages/TermsAndConditionsPage';
import LimitationsAndThreshold from './pages/LimitationsAndThreshold.jsx';
import ChargesAndFee from './pages/ChargesAndFee.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import HelpCenterPage from './pages/HelpCenterPage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/profile-sidemenu',
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/faqs', element: <FaqsPage /> },
        { path: '/privacypolicy', element: <PrivacyPolicyPage /> },
        { path: '/termsandcondition', element: <TermsAndCondtion /> },
        { path: '/limitationsandthreshold', element: <LimitationsAndThreshold /> },
        { path: '/chargesandfees', element: <ChargesAndFee /> },
        { path: '/settings', element: <SettingsPage /> },
        { path: '/helpcenter', element: <HelpCenterPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
