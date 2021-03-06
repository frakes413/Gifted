import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useMemo, useEffect } from 'react';
import { ColorSchemeName } from 'react-native';
import axios from 'axios';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import AuthContext from '../hooks/context';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log('User:', user);
  }, [user]);

  const authContext = useMemo(() => {
    return {
      logIn: async (username: string, password: string) => {
        // console.log(username, password);
        try {
          const response = await axios.post('http://localhost:3000/login', {
            username,
            password,
          });
          console.log('response object', response);

          if (response.status === 200) {
            setUser(response.data.user);
            setToken('pass');
          }
        } catch (err) {
          console.log(err);
        }
      },
      signUp: async (
        email: string,
        username: string,
        password: string,
        confirm: string
      ) => {
        if (password !== confirm) {
          console.log('passwords do not match');
          return;
        }
        try {
          const response = await axios.post('http://localhost:3000/signup', {
            username,
            email,
            password,
          });
          console.log('response object', response);

          if (response.status === 200) {
            setUser(response.data.user);
            setToken('pass');
          }
        } catch (err) {
          console.log(err);
        }
      },
      signOut: () => {
        setToken('');
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        {token ? <RootNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
