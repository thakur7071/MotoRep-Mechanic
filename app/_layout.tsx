import { Drawer } from 'expo-router/drawer';
import { useColorScheme, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useThemeColor } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({ light: '#fff', dark: '#000' }, 'background');
  const textColor = useThemeColor({ light: '#000', dark: '#fff' }, 'text');

  return (
    <Drawer
    screenOptions={{
      headerStyle: {
        backgroundColor: "#000A26",
      },
      headerTintColor: "white",
      drawerStyle: {
        width:280,
        backgroundColor: "#A6C6DB",
      },
      drawerActiveTintColor: 'white',
      drawerLabelStyle: {
         fontFamily: 'JosefinSans-Regular',
        fontSize: 16, // Optional: you can also control size
       
      },
    }}
    
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: '',
          headerRight: () => (
            <Text style={{ marginRight: 20, fontWeight: '600', fontSize: 16, color:"white",   fontFamily: 'JosefinSans-Regular', }}>
              MotoRep-Mechanic
            </Text>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="signup"
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
