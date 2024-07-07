import { RecursiveComonent } from "./RecursiveComponent";

function App() {
const nestedObject = {
  a:1,
  b:{
    b23 : "Hello",
  },
  b3:{
    b31:{
      message: "Hi,"
    },
    b32:{
      message : 'Hi',
    }  
  },
  c: {
    c1: 2,
    c2: 3,
  }
}

	return (
  <>
<RecursiveComonent data={nestedObject}/>
  </>
  );
}

export default App;