import React , {useState }from 'react';
import Login from './Login';
import './App.css';

// interface Props {
//   children: (loginStatus: boolean,
//     setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>) 
//     => JSX.Element | null;
// }



const App: React.FC = () => {
let [loginStatus, setLoginStatus] = useState<boolean>(false)

 function changeLogin()  {
  setLoginStatus(true)
}

  return (
    <div className="App">
        <div className='whatever'>{loginStatus}</div>
      <Login />
    </div>
  );
}

export default App;