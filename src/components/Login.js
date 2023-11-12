import {auth} from '../fbase';
// import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../styles/Login.css";

import {
  // createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
}from 'firebase/auth';

function Login(){
  // const [userData, setUserData]=useState(null);


  // 로그인 상태변수 
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
  });

  //로그인 함수
  const login = async ()=>{
    try{
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    }catch(error){
      console.log(error.message);
    }
  };

  //로그아웃
  const logout = async()=>{
    await signOut(auth);
  };


  const Navigate = useNavigate();
  const navigateToJoin = ()=>{
    Navigate("/join");
  }

  return (
    <div className='wrapper'>
    <h1>로그인</h1>
    <div>
      <div className='text'>Email</div>
      <input className='textBox'
        placeholder='이메일을 입력하세요'
        onChange={(e)=>{
          setLoginEmail(e.target.value);
        }}
      />
    </div>
    <div>
      <div className='text'>password</div>
      <input className='textBox'
        placeholder='비밀번호를 입력하세요'
        onChange={(e)=>{
          setLoginPassword(e.target.value);
        }}
      />
    </div>
    <button className='btn' onClick={login}>Login</button>
      <button className='btn' onClick={navigateToJoin}>Join</button>
      <div className='userSection'>
        <div className='userLabel'>User Logged In:</div>
        <div>{user?.email}</div>
      </div>
      <button className='btn' onClick={logout}>Logout</button>
    </div>
  );
}



export default Login;