import React, {useState, useEffect} from "react";
import { createContext } from "react";
import getRandomColor from "../utils/someFunctions";

const defaultValue = [];

export const MyContext = createContext(defaultValue);

export default function GlobalContext({children}) {
   
    getRandomColor();
    const [todos, setTodos] = useState([
        {
            todoTitle: 'javascript',
            status: 'backlog',
            id: Math.random(),
            itemColor: getRandomColor()
        },
        {
            todoTitle: 'python',
            status: 'inProgress',
            id: Math.random(),
            itemColor: getRandomColor()
        },
        {
            todoTitle: 'react',
            status: 'done',
            id: Math.random(),
            itemColor: getRandomColor()
        },
    ]);

    const addTodos = (newTodo) => {
        const newArray = [
            ...todos,
            newTodo
        ];
        setTodos(state => {
            return newArray;
        });
    };

    const deleteTodos = (todoId) => {
        const newArray = todos.filter(todoItem => todoItem.id !== todoId);
        setTodos(state => {
            return newArray;
        })
    };

    const setProgress = (todoId) => {
        const newArray = todos.map(todoItem => {
        if(todoItem.id === todoId) {
            const updatedTodo = {
            ...todoItem,
            status: "inProgress"
            };
            return updatedTodo;
        } else {
            return todoItem;
        };
        });
        setTodos((state) => {
        return newArray;
        });
    };

    const restoreTodos = (todoId) => {
        const newArray = todos.map(todoItem => {
            if(todoItem.id === todoId) {
                const updatedTodo = {
                ...todoItem,
                status: "backlog"
                };
                return updatedTodo;
            } else {
                return todoItem;
            };
            });
            setTodos((state) => {
            return newArray;
            });
    };

    const makeTodoDone = (todoId) => {
        const newArray2 = todos.filter(todoItem => todoItem.id === todoId);
        const newArray = todos.map(todoItem => {
        if(todoItem.id === todoId) {
            const updatedTodo = {
                ...todoItem,
                status: "done"
            };
            return updatedTodo;
        } else {
            return todoItem;
        };
        });
        setTodos(state => {
        return newArray;
        });
    };  


    return (
        <MyContext.Provider value={
            {
                todos,
                addTodos,
                deleteTodos,
                setProgress,
                makeTodoDone,
                restoreTodos
            }
        }>
            {children}
        </MyContext.Provider>
    )
};