import React, { useState, useEffect,} from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/theme";
import { useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, } from '@expo-google-fonts/lato';
import { Navigation } from "./src/infastructure/navigation/";
import { initializeApp } from 'firebase/app';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';




const firebaseAppConfig = {
  apiKey: "AIzaSyBjuiXaRnenV5i3oeNxa3PV58AQCI8gLsc",
  authDomain: "meals-to-go-472d0.firebaseapp.com",
  projectId: "meals-to-go-472d0",
  storageBucket: "meals-to-go-472d0.appspot.com",
  messagingSenderId: "79258112505",
  appId: "1:79258112505:web:126925eeca09f2ea30ed28"
}; 

const app = initializeApp(firebaseAppConfig);

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

 const [latoLoaded] = useLato ({
    Lato_400Regular,
 }); 

 if (!OswaldLoaded || !latoLoaded) {
  return null;
}


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
                <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/> 
    </>
  );


  };
