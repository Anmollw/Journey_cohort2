
import './App.css'
import { RecoilRoot, useRecoilState , useRecoilStateLoadable} from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  if (todo.state === "loading"){
    return <div>
      loading...
    </div>
  } 

  else if (todo.state === "hasError"){
    return <div>
      Error while fetching data from backend , Please try again later
    </div>
  }
  
  else if (todo.state === "hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
  }
  
}

export default App
