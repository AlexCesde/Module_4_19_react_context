import './App.css';
import ComponentCustom from './Components/ComponentCustom';
import ComponentFormik from './Components/ComponentFormik';
import ComponentLocation from './Components/ComponentLocation';
import Default from './Default';
import Error from './Error';

// Routing
import { Route, Routes } from 'react-router-dom';

// Context
import { OurContex, defaultContext } from './Components/OurContext';

function App() {
  return (
    <div>
      <header >
        <h1>Styled component</h1>
      </header>
      <main>
        <h2 id='supertitle'>Main content</h2>
        <p className='regular'>Information</p>
        <OurContex.Provider value={defaultContext}>
          <Routes>
            <Route index element={<Default />} />
            <Route exact path="/custom/:title" element={<ComponentCustom title="title" />} />
            <Route exact path="/form" element={<ComponentFormik />} />
            <Route exact path="/location" element={<ComponentLocation />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </OurContex.Provider>
      </main>
    </div>
  );
}

export default App;