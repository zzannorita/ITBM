import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../fbase';
import '../styles/Join.css';

const Join = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setRegisterEmail(emailValue);
    setEmailError(isEmailValid(emailValue) ? "" : "올바른 이메일 형식이 아닙니다.");
  };

  const register = async () => {
    try {
      if (!isValidPassword(registerPassword)) {
        setPasswordError("비밀번호는 8자 이상이어야 하며, 대소문자, 숫자, \n\n 특수문자를 포함해야 합니다.");
        return;
      }

      if (registerPassword !== confirmPassword) {
        setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
        return;
      }

      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

      setPasswordError("");
      setConfirmPasswordError("");
      alert('회원가입이 성공적으로 완료되었습니다.');
    } catch (error) {
      console.log(error.message);
  
      // Firebase에서 반환한 오류 메시지를 활용하여 사용자에게 알림
      alert(`회원가입 실패: ${error.message}`);
    }
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setRegisterPassword(newPassword);
    if (!isValidPassword(newPassword)) {
      setPasswordError("비밀번호는 8자 이상이어야 하며, 대소문자, 숫자, 특수문자를 포함해야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmation = e.target.value;
    setConfirmPassword(confirmation);

    // 비밀번호 확인 일치 여부 검사
    if (confirmation !== registerPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div className='wrapper'>
      <h1>회원가입</h1>
      <div className='form'>
        이메일
      </div>
      <div className='inputContainer'>
        <input
          className={`inputField ${emailError ? 'error' : ''}`}
          placeholder='이메일을 입력하세요'
          onChange={handleEmailChange}
        />
        <button className='button'>
          중복확인
        </button>
      </div>
      {emailError && <div className="errorText">{emailError}</div>}
      <div className='form'>
        비밀번호
      </div>
      <input
        className={`inputField ${passwordError ? 'error' : ''}`}
        placeholder='비밀번호를 입력하세요'
        onChange={handlePasswordChange}
        type="password"
      />
      {passwordError && <div className="errorText">{passwordError}</div>}
      <div className='form'>
        비밀번호 확인
      </div>
      <input
        className={`inputField ${confirmPasswordError ? 'error' : ''}`}
        placeholder='비밀번호를 다시 입력하세요'
        onChange={handleConfirmPasswordChange}
        type="password"
      />
      {confirmPasswordError && <div className="errorText">{confirmPasswordError}</div>}
      <div>
        <button className='button' onClick={() => register()}>회원가입</button>
      </div>
    </div>
  );
};


export default Join;