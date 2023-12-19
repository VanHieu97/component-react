import {useState} from "react";

const listTask = [
    {
        id: 1,
        title: 'Task 1',
        description:false
    },
    {
        id: 2,
        title: 'Task 2',
        description: false
    },
    {
        id: 3,
        title: 'Task 3',
        description: false
    }
];

function Task({myName}) {
    const [data, setData] = useState(listTask);
    const completed = (index) => {
        const  task = data[index];
        task.description =!task.description;
        const newTask = data.filter(item => item.description !== true)
        setData([...newTask])
    }
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Name:{myName}</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DES</th>
                    <th>{data.length}</th>
                </tr>
                </thead>
            <tbody>
                {data.map((item,index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                            <input type="radio" onClick={()=> completed(index)} checked={item.description}/>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}
export default Task;
