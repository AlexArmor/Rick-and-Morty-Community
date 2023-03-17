import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { CharacterDetails } from 'pages/CharacterDetails/CharacterDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="character/:idDetails" element={<CharacterDetails />} />
    </Routes>
  );
};
