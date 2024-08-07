import React from 'react'
import { Provider } from 'react-redux'
import { store } from "@/redux/store";
import ContextProvider from './context/context';

function App({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      //  <Provider store={store}> 
      <ContextProvider>
     <div>
     {children}
     </div>
     </ContextProvider>
  //  </Provider>
  )
}

export default App
