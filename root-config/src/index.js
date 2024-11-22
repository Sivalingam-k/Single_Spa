import { registerApplication, start } from 'single-spa';
import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';

// Import the App components from React App 1 and React App 2
import App1 from '../../react-app-1/app/src/App';  // Path to the React App 1
import App2 from '../../react-app-2/app2/src/App';  // Path to the React App 2

// Create single-spa lifecycles for React App 1
const reactLifecyclesApp1 = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App1,
  domElementGetter: () => document.getElementById('react-app-1-root'), // A specific div for React App 1
});

// Create single-spa lifecycles for React App 2
const reactLifecyclesApp2 = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App2,
  domElementGetter: () => document.getElementById('react-app-2-root'), // A specific div for React App 2
});

// Register the applications with Single SPA
registerApplication({
  name: 'react-app-1',
  app: reactLifecyclesApp1.mount, // Mount function for React App 1
  activeWhen: ['/app1'], // Make it active on the root route
});

registerApplication({
  name: 'react-app-2',
  app: reactLifecyclesApp2.mount, // Mount function for React App 2
  activeWhen: ['/app2'], // Make React App 2 active when navigating to "/app2"
});

// Start the Single SPA framework
start();
