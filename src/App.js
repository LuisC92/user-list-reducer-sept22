import { UserProvider } from "./context/UserContext";
import UserList from './components/UserList';
import AddUser from "./components/AddUser";

function App() {
  return (
    <div>
      <h1>User List with Reducer</h1>
      <UserProvider>
        <AddUser />
        <UserList />
      </UserProvider>
    </div>
  );
}

export default App;
