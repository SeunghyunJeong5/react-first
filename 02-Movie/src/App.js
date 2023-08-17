//JSON 파일을 import
import { dummy } from "./movieDummy";


//Movie 컴포넌트 import
import Movie from "./component/Movie";

//JSON 파일의 필드를 읽어서 Movie 컴포넌트의 매개변수로 주입 
function App() {
  return (
    <div>
      <div className = "app-container">

        {
          dummy.results.map((item) =>{
            //results 라는 배열안의 값을 map을 통해서 하나씩 끄집어내는것임.
            // 첫번째내용을 item에 끄집어냄.
            // 두번째.........


            return <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
            />
          }

          )


        }


      </div>
    </div>
  );
}

export default App;
