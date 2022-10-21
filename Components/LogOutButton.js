import { signOut } from "firebase/auth";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import LogoutIcon from "../assets/images/log-out.svg";
import { auth } from "../firebase";
import { authActions } from "../redux/auth/authSlice";

export default function LogOutButton() {
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(authActions.logOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={logOut}>
      <LogoutIcon width={24} height={24} />
    </TouchableOpacity>
  );
}
