import React ,{useState}from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../styles/All.css";

export default function Registration() {


  const [allContent, setAllContent] = useState({
    title:'',
    content:''
  })
  
  const [viewContent, setViewContent] = useState([]);

  const getValue = e =>{
    const {name, value} = e.target;
    setAllContent({
      ...allContent,
      [name]:value
    })
  }



  return (
    <div className="wrapper">
      <div className='form-wrapper'>
        <h1>글쓰기</h1>
          <input className="title-input" 
          type='text' 
          placeholder='제목을 입력하세요!'
          onChange={getValue}
          name='title' 
          />
        <CKEditor
          editor={ ClassicEditor }
          data="<p> </p>"
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
              setAllContent({
                ...allContent,
                content:data
              })
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
          
      />
      </div>
        <button 
        className="submit-button"
          onClick={()=>{
            setViewContent(viewContent.concat({...allContent}));
          }}
        ><span className="submit-text">등록</span></button>
    </div>
  )
}
