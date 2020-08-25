import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial94313Navigator from '../features/Tutorial94313/navigator';
import NotificationList94285Navigator from '../features/NotificationList94285/navigator';
import Settings94284Navigator from '../features/Settings94284/navigator';
import Settings94276Navigator from '../features/Settings94276/navigator';
import UserProfile94274Navigator from '../features/UserProfile94274/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial94313: { screen: Tutorial94313Navigator },
NotificationList94285: { screen: NotificationList94285Navigator },
Settings94284: { screen: Settings94284Navigator },
Settings94276: { screen: Settings94276Navigator },
UserProfile94274: { screen: UserProfile94274Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
