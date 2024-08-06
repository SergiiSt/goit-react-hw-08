import { useSelector } from "react-redux";
import HomeLoggedIn from "../../components/HomeLoggedIn/HomeLoggedIn";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import HomeLoggedOut from "../../components/HomeLoggedOut/HomeLoggedOut";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(isLoggedIn);
  
  return <>
  {isLoggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />}
  </>;
}
