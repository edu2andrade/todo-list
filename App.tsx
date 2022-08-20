import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar, Text } from 'react-native';
import { Header } from './src/components/Header';

import { Home } from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header />
      {fontsLoaded ? <Home /> : <Text>Loading...</Text>}
    </>
  );
}


