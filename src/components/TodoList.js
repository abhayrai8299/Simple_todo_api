import React,{memo} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '../redux/actions/action';

const TodoList = ({editid,setisEditid,setactive,setText}) => {
  const todos =useSelector((state)=>state.Todoreducer.todos)
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
     dispatch(Delete(id))
    if (editid !== "") {
      setText("");
    }
    setisEditid("");
    setactive(false);
  };
  const edit = (id) => {
    const data = todos.find((element) => {
      return element.id === id;
    });
    setText(data.taskName);
    setisEditid(id);
    setactive(true);
  };
  return (
     <>
       {todos.map((item) => {
          return (
            <li key={item.id}>
              <ul>
                {item.taskName}
                <button onClick={() => edit(item.id)}>Edit</button>
                <button onClick={() => deleteHandler(item.id)}>Delete</button>
              </ul>
            </li>
          );
        })}
     </>
  )
}

export default memo(TodoList)