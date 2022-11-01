import Quicks from "./components/Quicks";
import {RecoilRoot} from 'recoil'


function App() {
  return (
    <RecoilRoot>
      <div className="w-screen h-screen bg-gray-800">
        <Quicks/>
      </div>
    </RecoilRoot>
  );
}

export default App;
