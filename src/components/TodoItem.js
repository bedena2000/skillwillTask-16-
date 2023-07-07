import React from "react";
import { styled } from "styled-components";
import { useContext } from "react";
import { MyContext } from "../context/context";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// icons
import { BsTrash } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { TbProgressDown } from 'react-icons/tb';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

// utils
import { getElementObject } from "../utils/someFunctions";

const TodoItemWrapper = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: 1px solid brown;
    border-left: 6px solid ${props => props.bordercolor};
    border-radius: 6px;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemTitle = styled.p`
    color: brown;
    font-size: 18px;
`;

const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TodoItem = ({ id, itemColor, status, todoTitle }) => {
    
    const {
        deleteTodos,
        setProgress,
        makeTodoDone,
        restoreTodos
    } = useContext(MyContext);
    
    const handleDelete = () => {
        deleteTodos(id);
        toast.warn('item has been deleted', {
            autoClose: 1000,
        });
    };

    const handleUpdate = () => {
        setProgress(id);
        toast.info('item has been updated', {
            autoClose: 1000,
        });
    };

    const handleDone = () => {
        makeTodoDone(id);
        toast.info('item is done', {
            autoClose: 1000,
        });
    };

    const handleRestore = () => {
        restoreTodos(id);
        toast.info('you have successfully restored item', {
            autoClose: 1000
        });
    };

    const ItemLogic = () => {
        if(status === 'backlog') {
            return (
                <div style={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <BsTrash onClick={handleDelete} size="1em" /> 
                    <TbProgressDown onClick={handleUpdate} size="1em" />
                </div>
            );
        } else if (status === 'inProgress') {
            return (
                <div style={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <BsTrash onClick={handleDelete} size="1em" /> 
                    <BsCheckCircle onClick={handleDone} size="1em"  />
                </div>
            )
        } else if (status === 'done') {
            return (
                <div style={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <FaRegArrowAltCircleLeft size="1em" onClick={handleRestore} />
                    <BsTrash onClick={handleDelete} size="1em" /> 
                </div>
            )
        };
    };

    return (
        <TodoItemWrapper 
            bordercolor={itemColor}
        >
            <ItemTitle>
                {todoTitle}
            </ItemTitle>
            <div>
                <IconDiv>
                    <ItemLogic />
                </IconDiv>
                <ToastContainer />
            </div>
        </TodoItemWrapper>
    )
};

export default TodoItem;