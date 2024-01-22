import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Stacknav from './screens/components/navigator/Stacknav';

export default function App() {
  return (
    <NavigationContainer>
      <Stacknav/>
    </NavigationContainer>
  );
}
