import { createStackNavigator } from "@react-navigation/stack";
import { PostsDefaultScreen } from "./PostsDefaultScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MapScreen } from "./MapScreen";

const Stack = createStackNavigator();

export function PostsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DefaultPosts"
        component={PostsDefaultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
