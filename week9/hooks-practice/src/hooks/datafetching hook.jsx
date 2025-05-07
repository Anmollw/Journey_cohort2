//data fetching + auto refreshing hook 

export function useTodos(n){
    const [todos,setTodos] = useState([]);
    const [loading , setLoading] = useState(true);
  
    useEffect(()=>{
      const value = setInterval(()=>{
        axios.get("https://sum-backend.onrender.com/todos")
      .then(res=>{
        setTodos(res.data.todos);
        setLoading(false);
      })
      },n*1000)
  
      axios.get("https://sum-backend.onrender.com/todos")
      .then(res=>{
        setTodos(res.data.todos);
        setLoading(false);
      })
  
      return ()=>{
        clearInterval(value);
      }
  
    },[n]);
  
    return {todos,loading};
};

export function Track({todo}){
    return <div>
      {todo.title}
      <br/>
      {todo.description}
  
    </div>
};