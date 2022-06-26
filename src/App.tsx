/* eslint-disable no-undef */
import React, {useEffect} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {Provider} from 'react-redux';
import store from 'stores';
import {QueryClient, QueryClientProvider} from 'react-query';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from '@react-native-community/async-storage';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

function App() {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);
  useEffect(() => {
    RNAsyncStorageFlipper(AsyncStorage);
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={navigationRef} >
          {/*  */}
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
