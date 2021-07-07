
import './App.css';
import ProfileList from "./components/ProfileList"
import NavBar from "./components/NavBar"
import Welcome from "./components/Welcome"
import users from "./users.js"

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <ProfileList users={users}/>

    </div>
  );
}

export default App;
