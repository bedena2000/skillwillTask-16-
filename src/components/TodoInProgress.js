import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/context";
import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoWrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
`;
const TodoWrapperTitle = styled.h2`
    color: brown;
    font-size: 24px;
    padding-right: 6px;
    margin-right: 6px;
    border-right: 1px solid brown;
`;

const TodoWrapperItemCount = styled.p`
    font-size: 24px;
    color: red;
`;

const TodosItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TodoInProgress = () => {

    const { todos } = useContext(MyContext);
    const filteredTodos = todos.filter(item => item.status === "inProgress");
    const todosRendered = filteredTodos.map(item => <TodoItem
        key={item.id}
        id={item.id}
        itemColor={item.itemColor}
        status={item.status}
        todoTitle={item.todoTitle}    
    />);

   
    
    return (
        <TodoWrapper
            
        >
            <div style={{
                display: 'flex',
                borderBottom: '1px solid brown',
                paddingBottom: '20px',
                marginBottom: '20px'
            }}>
                <TodoWrapperTitle>
                    In Progress
                </TodoWrapperTitle>
                <TodoWrapperItemCount>
                    {
                        todosRendered.length
                    }
                </TodoWrapperItemCount> 
            </div>
            <TodosItemsWrapper>
                {
                    todos ? (
                        todosRendered
                    ) : null
                }
            </TodosItemsWrapper>
        </TodoWrapper>
    );
};  

export default TodoInProgress;