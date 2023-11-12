import React ,{useState, useEffect}from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../styles/All.css";
import "../styles/Pagenation.css";
import Pagination from "react-js-pagination";
import {useNavigate} from 'react-router-dom';


export default function All() {

  const [allContent, setAllContent] = useState({
    title:'',
    content:''
  })
  
  const [viewContent, setViewContent] = useState([]);
  const [page, setPage] = useState(1);
  

  const handlePageChange = (page) => {
    setPage(page);
  };

  const getValue = e =>{
    const {name, value} = e.target;
    setAllContent({
      ...allContent,
      [name]:value
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchDataFromServer(page);

      setViewContent(newData);
    };

    fetchData(); 
  }, [page]); 

  
  const fetchDataFromServer = async (page) => {
    try {
      const startIdx = (page - 1) * 10;
      // const endIdx = startIdx + 10; // 'endIdx'를 사용하지 않는 경우 이 줄을 제거
      const newData = Array.from({ length: 10 }, (_, index) => ({
        title: `제목 ${startIdx + index + 1}`,
        content: `내용 ${startIdx + index + 1}`,
      }));
  
      return newData;
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      return [];
    }
  };

  //등록페이지로 이동
  const Navigate = useNavigate();
  const navigateToRegist = ()=>{
    Navigate("/registration");
  }

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }


  return (
    <div className="All">
      <h1>전체게시판</h1>
      <button className='registBtn'>
        <span className='registBtnText' onClick={navigateToRegist}>글쓰기
        </span>
        </button>
        <div className='all-container'>
          {viewContent.map(element =>(
            <div>
              <h2>{truncateText(element.title, 30)}</h2>
              <div dangerouslySetInnerHTML={{ __html: truncateText(element.content, 40) }}>
            </div>
            </div>
            ))}
        </div>
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={450} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={"‹"} // "이전"을 나타낼 텍스트
          nextPageText={"›"} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />

        <div className='form-wrapper'>
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
        >
          <span className="submit-text">등록</span></button>
    </div>
  )
}
