
import axios from "axios";
import { useState } from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [data, setData] = useState({});
    const Navigate = useNavigate()
    const onChange = (e)=>{
        e.preventDefault()
        const datatiempo = data
        datatiempo[e.target.name] = e.target.value;
        setData(datatiempo)

    }

    const onSumbit = async ()=>{
        try{
            const res = await axios.post("http://localhost:3000/login", data);
            if(res.data.user.rol == "administrador"){
                Navigate("/home")

            }
            else{
                Navigate("/")
            }
        }catch (error) {

        }
    }
    return(
        <Container>
        <Card style={{
            width:"25rem",
            margin:"auto"
        }}>
            <Card.Body>
                  <Card.Title>iniciar sesion</Card.Title>
                  <Form>
                    <Form.Group className="text-center mt-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control onChange={onChange} name="email" placeholder="ingresa tu correo"></Form.Control>
                    </Form.Group>
                    <Form.Group className="text-center mt-3">
                        <Form.Label>contraseña</Form.Label>
                        <Form.Control onChange={onChange} name="password" placeholder="ingresa tu contraseña"></Form.Control>
                    </Form.Group>
                  </Form>
                  <Button onDoubleClick={()=>onSumbit( )}>Enviar</Button>
            </Card.Body>
        </Card>
    </Container>
    )
}