import {useState} from 'react'


type Todo = {
  value:string;
  readonly id: number;
};
export const App = () => {

  //欄に入力された値を変数に格納
  const [text, setText] = useState('');

  const [todos, setTodos] = useState<Todo[]>([]);

  //欄に入力された値を取得する
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  
  //提出するときに入力された文字を格納する
  const handleSubmit = () => {
    if(!text) return;
  
    const newTodo: Todo = {
      value: text,
    };

    setTodos((todos) => [newTodo,  ...todos]);
    setText('');
  };
  
  return (
    <div>
      <form 
        onSubmit={(e) => {
         e.preventDefault();
         handleSubmit();
        }}
      >
        <input type="text"

          value={text}

          onChange={(e) => handleChange(e)} />

        <input
          type="submit"
          value="追加"
          onSubmit={(e) => e.preventDefault()}
        />
      </form>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.value}</li>;
        })}
      </ul>
    </div>
  );
};