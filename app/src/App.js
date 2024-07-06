import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

function App() {
	return (
  <>
    <UserInfo userId={102}/>
    <ProductInfo productId={1001}/>
    <UserInfo userId={101}/>
    <ProductInfo productId={1002}/>
  </>
  );
}

export default App;