import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './homepage/Navbar';
import Home from './pages/Home';
import Footer from './homepage/footer';
import Audiolize from './pages/Audiolize';
import About from './pages/About';
import Project from './pages/Projects';
import Allurereach from './pages/Allurereach';


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
{
  path: '/allurereach',
  element: <Allurereach/>
}
 
]);

function App() {
  return (
    <div className="bg-[black]">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;