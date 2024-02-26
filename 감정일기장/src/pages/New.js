import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  // 페이지가 처음으로 렌더링 될 때 index.html title 수정
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
