import React from 'react';
import { compose, composeU } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { Optimized as OptimizedBase } from './components/Optimized/Optimized';
import { withDynamic } from './components/Optimized/_dynamic/Optimized_dynamic';
import { withThemeNormal } from './components/Optimized/_theme/Optimized_theme_normal';
import { withThemeLuxary } from './components/Optimized/_theme/Optimized_theme_luxary';

import { ComponentExtension as ComponentExtensionBase } from './components/ComponentExtension/ComponentExtension';
import { withOrdered } from './components/ComponentExtension/_ordered/ComponentExtension_ordered';

import { Subscribe } from './components/Subscribe/Subscribe';
import { subscribeRegistry } from './components/Subscribe/Subscribe.registry/desktop';

import logo from './bem.svg';
import './App.css';

const Optimized = compose(
  withDynamic,
  composeU(withThemeNormal, withThemeLuxary),
)(OptimizedBase);

const ComponentExtension = withOrdered(ComponentExtensionBase);

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      
      <Optimized className="Mix" theme="normal" dynamic>Учи БЭМчик!</Optimized>

      <ComponentExtension ordered items={['Привет', 'мой', 'случайный', 'слушатель']} />

      <Subscribe />
    </header>
  </div>
);

export default withRegistry(subscribeRegistry)(App);
