import { UserProvider } from "./context/UserContext";
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <h1>User List with Reducer</h1>
      <UserProvider>
        <UserList />
      </UserProvider>
    </div>
  );
}

export default App;
