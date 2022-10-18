import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostScreen } from "./CreatePostScreen";
import { ProfileScreen } from "./ProfileScreen";
import PostsIcon from "../assets/images/grid.svg";
import CreatePostIcon from "../assets/images/plus.svg";
import ProfileIcon from "../assets/images/user.svg";
import { Header } from "../Components/Header";

const Tab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
      }}
      sceneContainerStyle={styles.scene}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.postsIconWrap}>
              <PostsIcon width={28} height={28} />
            </View>
          ),
          header: ({ navigation, route, options }) => {
            return (
              <Header logout onClickLogout={() => {}} title="Публикации" />
            );
          },
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.createPostIconWrap}>
              <CreatePostIcon width={16} height={16} />
            </View>
          ),
          header: ({ navigation, route, options }) => {
            return (
              <Header
                back
                onClickBack={() => {
                  navigation.navigate("Posts");
                }}
                title="Создать публикацию"
              />
            );
          },
        }}
        name="CreatePost"
        component={CreatePostScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.profileIconWrap}>
              <ProfileIcon width={28} height={28} />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 113,
  },
  tabBarItem: { marginBottom: 20 },
  postsIconWrap: {
    marginLeft: 80,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
  createPostIconWrap: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
  profileIconWrap: {
    marginRight: 80,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
  scene: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#c3c3c3",
  },
});
