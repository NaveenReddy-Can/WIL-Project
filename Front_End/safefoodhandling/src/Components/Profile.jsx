import { useAuth0 } from "@auth0/auth0-react";
import "./css/profile.css";
import Home from "./Home";
import Register from "./UserData/AddUser";
import Details from "./UserData/Details";
import Home1 from "./UserData/Home1";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return isAuthenticated ? (
    isAuthenticated && (
      <article className="profilestyle">
        <center>
          {user?.picture && <img src={user.picture} alt={user?.name} />}
        </center>
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
        <div>
          <Home1 />
        </div>
      </article>
    )
  ) : (
    <artical className="profilestyle1">
      <center>
        <h1>Please login to see your profile Here</h1>
      </center>
    </artical>
  );
};

export default Profile;
