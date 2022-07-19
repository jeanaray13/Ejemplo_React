import { useState } from "react";

const Adder = (props) => {
    const [taskInput, setTaskInput] = useState("");

    const {addTask} = props;

    const addButtonHandler = (e) => {
        addTask({task: taskInput, status:false});
    }

    const onChangeHandler = (e) => {
        setTaskInput(e.target.value);
    }

    return(
        <div>
            <input type="text" className="TaskTxt" onChange={onChangeHandler}/>
            <button onClick={addButtonHandler}>Add</button>
        </div>
    );
}

export default Adder;