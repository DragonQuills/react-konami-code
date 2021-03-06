import React from 'react';
import { useKonami } from 'react-konami-code';

const easterEgg = () => {
  alert('Hey, you typed the Konami Code!');
};

export default () => {
  useKonami(easterEgg);
  return (
    <div>
      Type the Konami Code:
      <strong>↑ ↑ ↓ ↓ ← → ← → B A</strong>
    </div>
  );
};
