import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostScreen } from "./CreatePostScreen";
import { ProfileScreen } from "./ProfileScreen";
import PostsIcon from "../assets/images/grid.svg";
import CreatePostIcon from "../assets/images/plus.svg";
import ProfileIcon from "../assets/images/user.svg";
import LogoutIcon from "../assets/images/log-out.svg";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
      }}
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
              <View style={styles.header}>
                <Text style={styles.title}>Публикации</Text>
                <TouchableOpacity style={styles.logout}>
                  <LogoutIcon width={24} height={24} />
                </TouchableOpacity>
              </View>
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
    height: 83,
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
  header: {
    height: 88,
    flex: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    padding: 11,
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 17,
    color: "#212121",
  },
  logout: {},
});
