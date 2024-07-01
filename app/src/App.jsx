import './App.css';
import { UserInfo } from './UserInfo';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo';
import { DataSource } from './DataSource';
import axios from 'axios';

const getServerData = url => async ()=>{
  const resp = await axios.get(url);
return resp.data};

function App() {
  return (
  <>
  <ResourceLoader resourceURL={"/users/101"} resourceName={"user"}>
      <UserInfo/>
    </ResourceLoader>
    <ResourceLoader resourceURL={"/products/1002"} resourceName={"product"}>
      <ProductInfo/>
    </ResourceLoader>
    <DataSource getDataFunc={getServerData("/users/102")} resourceName="user" >
      <UserInfo/>
    </DataSource>
  </>
    
  );
}

export default App;
