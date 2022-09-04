import { useNavigate } from "react-router-dom"
import {InputGroup, Button, Row, Col, Form} from "react-bootstrap";
import { useState, useContext } from "react";
import { OnboardingContext } from "../../context/OnboardingProvider";
import SubjectTitle from "./SubjectTitle";

export default function WorkspaceInfo(){
    let navigator = useNavigate();
    const onboardingCtx = useContext(OnboardingContext);
    const [workspaceUrl,setWorkspaceUrl] = useState('');
    const [workspaceName,setWorkspaceName] = useState('');

    const handleSubmit = () =>{
        console.log("Submit Called");
        if(workspaceUrl.length>0 && workspaceName.length>0){
            onboardingCtx.nextStep();
            navigator("/WorkspaceType");
        } else {
            if(workspaceName.length>0){
                document.getElementById("formWorkspaceUrl").focus();
            } else {
                document.getElementById("formWorkspaceName").focus();
            }
        }
    }

    const handelWorkspaceUrl = (e) => {
        console.log(e.target.value);
        setWorkspaceUrl(e.target.value)
    }

    const handelWorkspaceName = (e) => {
        console.log(e.target.value)
        setWorkspaceName(e.target.value)
    }

    return <>
    <SubjectTitle title={"Let's set up home for all your work"} subtitle={"You can always create another workspace later."} />
    <Row>
        <Col md={4}></Col>
        <Col md={4}>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formWorkspaceName">
                        <Form.Label>Workspace Name</Form.Label>
                        <Form.Control type="text" placeholder="Eden" onChange={handelWorkspaceName}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formWorkspaceUrl">
                        <Form.Label>Workspace URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                www.eden.com/
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Example" onChange={handelWorkspaceUrl}></Form.Control>
                        </InputGroup>
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