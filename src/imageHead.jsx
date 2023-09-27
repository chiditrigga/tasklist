import bigLight from "./assets/bg-desktop-light.jpg";
import bigSun from "./assets/icon-sun.svg";
import bigmoon from "./assets/icon-moon.svg";
import "./assets/style.css";
import {
  Image,
  Container,
  Row,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Col,
} from "react-bootstrap";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ch from "./assets/icon-check.svg";
import close from './assets/icon-cross.svg'
import HandleStates from "./components/handlestate";

const ImageHead = () => {
  const [todo, setTodo] = useState();
  const [todolist, setTodolist] = useState([]);
  const [statuss, setStatuss] = useState("all");

  const sendTodos = (e) => {
    e.preventDefault();
    setTodolist((current) => [
      ...current,
      { title: todo, id: crypto.randomUUID(), completed: false },
    ]);
    setTodo("");
  };

  const handleOncheck = (id, completed) => {
    setTodolist((currentTodos) => {
      return currentTodos.map((todoo) => {
        if (todoo.id === id) {
          return { ...todoo, completed };
        }
        return todoo;
      });
    });
    console.log(JSON.stringify(todolist));
  };

  const handleFilter = () => {
    if (statuss === "all") {
      return todolist;
    } else if (statuss === "active") {
      return todolist.filter((list) => list.completed === false);
    } else if (statuss === "completed") {
      return todolist.filter((list) => list.completed === true);
    }
  };

  const handleDelete = (id) => {
    const filter = todolist.filter((todoo) => todoo.id !== id);
    setTodolist(filter);
  };

  const clearCompleted = () => {
    let filter = todolist.filter((fil) => fil.completed !== true);
    setTodolist(filter);
  };
  return (
    <div>
      <Container className="img1 " fluid >
        <Row className="text-center img2 mx-auto">
          <Col className="justify-content-start d-flex text-white align-items-center ps-0" xs={6}>
            <h1>TODO</h1>
          </Col>
          <Col  className="justify-content-end d-flex p-5 pe-0" xs={6}>
            
            <Image className="mw-10" fluid src={bigmoon} />
          </Col>
        </Row>

        <Row className="img2 mx-auto"> 
        
          <Col className="px-0 ">
          
            <Form onSubmit={(e) => sendTodos(e)}>
               
              <InputGroup className="mb-3 ">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" className="border-end-0" />
                <Form.Control
                
                  onChange={(e) => setTodo(e.target.value)}
                  className="py-3 border-start-0"
                  value={todo}
                  placeholder="Create a new todo..."
                  aria-label="Text input with checkbox"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row className="">
         <Col xs={12} className="img2 bod mx-auto px-0">
          {todolist.length > 0 ? handleFilter().map((todos) => {
          return (
            <li className="bb " key={todos.id}>
                <InputGroup className="mb-0 ">
                <InputGroup.Checkbox   checked={todos.completed}
                onChange={(e) => handleOncheck(todos.id, e.target.checked)} className="border-end-0" />
                <Form.Control
                readOnly
                  className={todos.completed?"py-3 border-start-0 list":"py-3 border-start-0" }
                  value={todos.title}
                  placeholder="Create a new todo..."
                  aria-label="Text input with checkbox"
                />
              </InputGroup>
            </li>
          );
        }):'Nothing to display'}
          
        <div className="im ">
           <HandleStates className="im"
          Button={Button}
          variant
          todolist={todolist}
          clearCompleted={clearCompleted}
          setStatuss={setStatuss}
        />
        </div>
        
         </Col>
        </Row>
      
       
      </Container>
    </div>
  );
};
export default ImageHead;
