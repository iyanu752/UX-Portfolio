import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './homepage/Navbar';
import Home from './pages/Home';
import Footer from './homepage/footer';
import Audiolize from './pages/Audiolize';
import About from './pages/About';
import Project from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/audiolize',
    element: <Audiolize />,
  },
]);

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;