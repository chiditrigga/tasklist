import "bootstrap/dist/css/bootstrap.min.css";


const HandleStates = ({todolist, clearCompleted, setStatuss,Button}) => {
    return <>
    <div className="d-flex justify-content-between">

    
    {todolist.filter( fil => fil.completed !== true).length} items left
    
      <Button className=""  onClick={()=> setStatuss('all')}>all</Button>

     
    
        
         <Button className="border-0" onClick={()=> setStatuss('active')}>active</Button>
         <Button onClick={()=> setStatuss('completed')}>completed</Button>
         <Button className="" onClick={() => clearCompleted()}>clear completed</Button>
    </div>
    </>
 }

 export default HandleStates;