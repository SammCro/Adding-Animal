import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from "react-dom/client";
import App from './App';


const el = document.getElementById('root');

const root = createRoot(el);

root.render(<App></App>);
