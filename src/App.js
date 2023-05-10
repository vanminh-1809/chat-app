import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Chat from './pages/Chat';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>} />;
          })}
          <Route path="/" element={<Chat/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
