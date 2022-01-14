import {Route, Routes} from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from './Pages/Homepage';
import InstallTutorial from './Pages/installTutorial';
import WebpageTutorial from './Pages/webpagetutorial';
import Conclusion from './Pages/conclusion';
import Credits from './Pages/credits';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/installTutorial' element={<InstallTutorial/>} />
        <Route path='/webpagetutorial' element={  <WebpageTutorial/>} />
        <Route path='/conclusion' element={ <Conclusion/>}/>
        <Route path='/credits' element={<Credits/>} />  
      </Routes>
    </Layout>
  );
}

export default App;
