const colors = [
    '#581845',
    '#900C3F',
    '#900C3F',
    '#FF5733',
    '#FFC300',
    '#DAF7A6'
];

function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * (5 - 0 + 1) + 0);;
    return colors[randomNumber];
};

export const getElementObject = (newTodoTitle) => {
    return {
        todoTitle: newTodoTitle,
        status: 'backlog',
        id: Math.random(),
        itemColor: getRandomColor()
    };
};

export default getRandomColor;