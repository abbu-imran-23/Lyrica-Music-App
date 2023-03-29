import LeftMenu from './Components/LeftMenu';
import MainContainer from './Components/MainContainer';
import RightMenu from './Components/RightMenu';

function App() {
  return (
    <div className='flex justify-between w-[100%] h-[100vh] bg-cover'>
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>
    </div>
  );
}

export default App;
