import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import HomeScreen from "./HomeScreen";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { authActions } from "../redux/auth/authSlice";

const MainStack = createStackNavigator();

export default function NavigationScreen() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          return;
        }
        const { displayName, photoURL, uid } = user;
        dispatch(authActions.login({ displayName, photoURL, uid }));
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <MainStack.Navigator initialRouteName="Registration">
      {isLoggedIn ? (
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </MainStack.Navigator>
  );
}
