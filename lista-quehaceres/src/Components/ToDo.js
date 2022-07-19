    const ToDo = (props) => {
    const {todoLst, removeTask, updateStatus} =  props;

    const deleteHandler = (i) => {
        removeTask(i);
    }

    const checkboxHandler = (i) => {
        updateStatus(i);
    }

    return(
        todoLst.map((item, i) => 
            <p key={i}>
                <span className='Task' style={{textDecoration: item.status && 'line-through'    }}>{item.task}</span> 
                <input type='checkbox' defaultChecked={item.status} onChange={() => checkboxHandler(i)}/>
                <button onClick={() => deleteHandler(i)}> Delete</button>
            </p>   
            
        )
    );

}
export default ToDo;