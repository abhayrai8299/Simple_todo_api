import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Circles } from "react-loader-spinner";
import { postaddTodo,updateApiTodo } from "../redux/actions/action";
import Input from "./Input";
const Form = ({loading,setLoading,text,setText,active,setactive,toggle,setToggle,editid,setisEditid,}) => {
  const dispatch = useDispatch();

  console.log("form1")
  const addHandler = () => {
  
    if (text !== "") {
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      },5000)
      if (editid !== "") {
        setTimeout(()=>{
          dispatch(updateApiTodo(editid,text));
        },4000)
    
        //dispatch(Edit(editid,text))
        setisEditid("");
        setText("");
        setactive(false)
        setToggle(false);
      } else {
        dispatch(postaddTodo(text))
      // dispatch(Add({text}))
        setText("");
      }
    } else if(editid!=="" )
      {
        setToggle(true)
        setTimeout(()=>{
        setToggle(false)
        setactive(true);
        },2000)
      }
      else
      {
        setToggle(true)
        setTimeout(()=>{
        setToggle(false)
        },2000)
      }
  };
  const clickHandler = () => {
    setText("");
    setisEditid("");
    setactive(false);
  };
  return (
    <div>
      <h2>Todo_Api</h2>
      <Input toggle={toggle} text={text} setText={setText} />
      <button type="button" onClick={addHandler}>
        {!active ?loading===false?"Add":<Circles color="#00BFFF" height={10} width={25} />: "Update"}
      </button>
      {active ? (
        <span className="cancelbtn" onClick={clickHandler}>
          Cancel
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default memo(Form);
