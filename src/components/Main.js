import React from 'react'
import mbti from '../styles/img/mbti-img.png'
import {Link} from 'react-router-dom';

const Main=()=> {
  const imgStyle = {
    width:"100%"
  }

  const containerStyle={
    textAlign:"center"
  }

  const btn={
    textAlign:"center",
    marginLeft:"40%",
    outline:"none",
    width: 'var(--btn-w)',
    color: 'var(--primary)',
    
    borderRadius: '5em',
    textTransform: 'uppercase',
    fontSize: '1.3em',
    lineHeight: '2em',
    cursor: 'pointer',
    backgroundColor:'#fbf4ea'
  }

  const btnText={
    fontSize:"16px",
    margin:"30px",
    color:"black"
  }




  return (
    <>
      <div style={containerStyle}>
        <img style={imgStyle}src={mbti} alt="logo"/>
      </div>
      <button style={btn}>
        <Link to="https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC"
        style={{textDecoration:"none"}}>
        <span style={btnText}> 
          MBTI check !
        </span>
        </Link>
      </button>
    </>
  )
}

export default Main;