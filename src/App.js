import Quicks from "./components/Quicks";
import {RecoilRoot} from 'recoil'
import {MdOutlineSearch} from 'react-icons/md'

function App() {
  return (
    <RecoilRoot>
      <div className="w-screen h-screen bg-[#262626]">
        <div className="flex divide-x-2 divide-secondary-white">
          <div className="h-screen w-72"></div>
          <div className="flex-1">
            <div className="flex items-center w-full px-6 h-14 bg-secondary-dark">
              <MdOutlineSearch className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <Quicks/>
      </div>
    </RecoilRoot>
  );
}

export default App;
