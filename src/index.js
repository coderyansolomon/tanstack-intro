import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import {
  RouterProvider,
  createRouter,
  createRootRoute
} from '@tanstack/react-router';

import './index.css';
import NavigationHeader from './NavigationHeader';
import { homeRoute } from './Home';
import { aboutRoute } from './About';

export const rootRoute = createRootRoute({
  component: NavigationHeader
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

const router = createRouter({routeTree})

const rootElement = document.getElementById('root')

if (!rootElement.innerHTML){
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}