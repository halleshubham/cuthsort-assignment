import { useNavigate} from "react-router-dom"
import {Button, Row, Col, Form} from "react-bootstrap";
import { useState, useContext } from "react";
import { OnboardingContext } from "../../context/OnboardingProvider";
import SubjectTitle from "./SubjectTitle";

export default function UserInfo({initialEntries}){

    let navigator = useNavigate();
    const onboardingCtx = useContext(OnboardingContext);
    const [fullName,setFullName] = useState('');
    const [displayName,setDisplayName] = useState('');

    const handleSubmit = () =>{
        console.log("Submit Called");
        if(fullName.length>0 && displayName.length>0){
            onboardingCtx.nextStep();
            navigator("/WorkspaceInfo");
        } else {
            if(fullName.length>0){
                document.getElementById("formDisplayName").focus();
            } else {
                document.getElementById("formFullName").focus();
            }
        }
    }

    const handleFullName = (e) => {
        console.log(e.target.value);
        setFullName(e.target.value);
    }

    const handleDisplayName = (e) => {
        console.log(e.target.value);
        setDisplayName(e.target.value);
    }

    return <>
    <SubjectTitle title={"Welcome! First things first..."} subtitle={"You can always change them later."} />
    <Row>
        <Col md={4}></Col>
        <Col md={4}>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Steve Jobs" onChange={handleFullName}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDisplayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="text" placeholder="Steve" onChange={handleDisplayName}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button className="btn-submit" onClick={handleSubmit}>Create Workspace</Button>
                    </Form.Group>
                </Form>
            </Row>
        </Col>
        <Col md={4}></Col>
    </Row>
</>
}