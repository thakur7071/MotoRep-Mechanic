import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
    
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#000A26', height: 40 },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "#888",
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={22} name="house.fill" color={color} />,
        }}
      />

<Tabs.Screen
        name="Booking"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="clipboard" size={22} color={color} />
          ),
        }}
      />
     
     <Tabs.Screen
        name="Profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={22} name="person.fill" color={color} />,
        }}
      />

     
<Tabs.Screen
        name="(authlogin)/login"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="log-in-outline" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
