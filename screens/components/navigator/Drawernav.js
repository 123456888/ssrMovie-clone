import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MovieHome from '../MovieHome';
import BollywoodList from '../BollywoodList';
import HollywoodList from '../HollywoodList';
import SouthList from '../SouthList';
import WebseriesList from '../WebseriesList';
import AllMovieList from '../AllMovieList';
import MarvelMovie from '../MarvelMovie';
import Contact from '../Contact';
import Privacy from '../Privacy';
import CustomizeSide from './CustomizeSide';

const Drawer = createDrawerNavigator();

const Drawernav = () => {
    return (
        <Drawer.Navigator initialRouteName="SSR MOVIES" drawerContent={(props) => <CustomizeSide{...props} />}>
            <Drawer.Screen name="SSR MOVIES" component={MovieHome}></Drawer.Screen>
            <Drawer.Screen name="Bollywood Movie" component={BollywoodList}></Drawer.Screen>
            <Drawer.Screen name="Hollywood Movie" component={HollywoodList}></Drawer.Screen>
            <Drawer.Screen name="South Indian Movie" component={SouthList}></Drawer.Screen>
            <Drawer.Screen name="Latest Webseries" component={WebseriesList}></Drawer.Screen>
            <Drawer.Screen name="Marvel Movie" component={MarvelMovie}></Drawer.Screen>
            <Drawer.Screen name="All Movies" component={AllMovieList}></Drawer.Screen>
            <Drawer.Screen name="Contact Us" component={Contact}></Drawer.Screen>
            <Drawer.Screen name="Privacy Policy" component={Privacy}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default Drawernav