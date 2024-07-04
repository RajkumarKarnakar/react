import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWithLoader = withUser(UserInfo,'101')
const UserInfoWrapped = printProps(UserInfo);
function App() {
	return (<>
    <UserInfoWrapped a ={1} b='Hello' c={{name: 'rajkumar',age: 24}} d/>
    <UserInfoWithLoader/>
    </>
  );
}

export default App;