import { Container } from 'react-bootstrap';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SessionUser from './pages/SessionUser';
import SessionBody from './components/SessionBody';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/sesion',
    element: <SessionUser />,
    children: [
      {
        path: '',
        element: <SessionBody />
      }
    ]
  }
])

function App() {
  return (
    <Container fluid className="App">
      <RouterProvider  router={router} />
    </Container>
  );
}

export default App;
