"use client"

import React from 'react'
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const persiStor = persistStore(store)
  return <Provider store= {store} >
    {children}
    <PersistGate persistor={persiStor}>
    {children}
    </PersistGate>
    </Provider>
}
