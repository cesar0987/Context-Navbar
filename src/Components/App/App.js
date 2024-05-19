import React, {useState} from 'react';
import './App.css';
import Wrapper from '../Wraper/Wraper';
import Navbar from '../Navbar/Navbar';
import FormWrapper from '../FormWraper/FormWraper';
function App() {
  const [userInfo, setUserInfo] = useState({ name: ''});

  return (
    <Wrapper>
      <Navbar userInfo={userInfo.name} />
      <FormWrapper userInfo={userInfo} setUserInfo={setUserInfo} />
    </Wrapper>
  );
}
    

export default App;
