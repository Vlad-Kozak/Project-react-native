import { createStackNavigator } from "@react-navigation/stack";
import PostsDefaultScreen from "./PostsDefaultScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import Header from "../Components/Header";

const Stack = createStackNavigator();

export default function PostsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DefaultPosts"
        component={PostsDefaultScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return <Header logout title="Публикации" />;
          },
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return (
              <Header
                back
                onClickBack={() => {
                  navigation.navigate("DefaultPosts");
                }}
                title="Комментарии"
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return (
              <Header
                back
                onClickBack={() => {
                  navigation.navigate("DefaultPosts");
                }}
                title="Карта"
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
