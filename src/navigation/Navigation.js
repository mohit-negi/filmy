import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieList from '../screens/MovieList';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="MovieList" options={{headerShown:false}} component={MovieList}/>
        <Stack.Screen name="MovieScreen" options={{headerShown:false}} component={MovieScreen}/>
        <Stack.Screen name="PersonScreen" options={{headerShown:false}} component={PersonScreen}/>
        <Stack.Screen name="SearchScreen" options={{headerShown:false}} component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}