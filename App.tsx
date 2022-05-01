import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { useFonts } from "expo-font";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fonts } from './src/theme/fonts';
import { ActivityIndicator } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts({
      [fonts.regular]: require('./assets/fonts/CircularStd-Medium.ttf'),
      [fonts.bold]:  require('./assets/fonts/CircularStd-Bold.ttf'),
    });
    if(!fontsLoaded) return <ActivityIndicator size="large" style={{justifyContent: 'center', flex: 1}} />
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
}
