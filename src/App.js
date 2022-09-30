import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/Home';
import Create from './routes/create/Create';
import Event from './routes/event/Event';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/event' element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
