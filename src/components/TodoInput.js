import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { MyContext } from "../context/context";
import { useContext } from "react";
import { GrAdd } from 'react-icons/gr';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { getElementObject } from "../utils/someFunctions";

const InputDiv = styled.div`
    display: flex;
    gap: 10px;
    background-color: white;
    border-radius: 10px;
    width: 300px;
    margin: 0 auto;
    padding: 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const InputDivInput = styled.input`
    width: 100%;
    height: auto;
    border: none;
    outline: none;
`;

const InputDivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


const TodoInput = () => {
    
    const [inputVal, setInputVal] = useState('');
    const { addTodos } = useContext(MyContext);

    const notify = () => {
        toast("Default Notification !");
  
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
  
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
  
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        });
  
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
  
        toast("Custom Style Notification with css class!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        });
      };

    const handleTodo = () => {
        if(inputVal.trim()) {
            const result = getElementObject(inputVal);
            addTodos(result);
        };
        toast.success("Todo Item has been added!", {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return <InputDiv>
        <InputDivInput value={inputVal} onChange={(event) => setInputVal(event.target.value)} placeholder="enter todo name">

        </InputDivInput>
        <InputDivLogo onClick={handleTodo}>
            <GrAdd />
        </InputDivLogo>
        <ToastContainer />
    </InputDiv>
};

export default TodoInput;