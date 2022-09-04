import { useNavigate } from "react-router-dom"
import {Button, Row, Col, Form, InputGroup} from "react-bootstrap";
import { useContext, useState } from "react";
import {PersonFill,PeopleFill} from "react-bootstrap-icons";
import { OnboardingContext } from "../../context/OnboardingProvider";
import SubjectTitle from "./SubjectTitle";


export default function WorkspaceType(){
    let navigator = useNavigate();
    const onboardingCtx = useContext(OnboardingContext)
    const [workspaceType,setWorkspaceType] = useState("")

    const handleSubmit = () =>{
        console.log("Submit Called");
        if(workspaceType.length>0){
            onboardingCtx.nextStep();
            navigator("/Launcher");
        } else {
            alert("Please select an option!");
        }
    }

    return <>
    <SubjectTitle title={"How are you planning to use Eden?"} subtitle={"We'll streamline your setup experience accordingly."} />
    <Row className="workspace-type-container">
        <Col md={4}></Col>
        <Col md={4}>

            <Row className="h-95">
                <Form onSubmit={handleSubmit} className="h-100">
                    <Row>
                    <Form.Group className="mb-3 h-75" controlId="fromDisplayName">
                        <InputGroup className="mb-3 h-100">
                        <Col md={6} className="btn-container">
                            <Button variant="light" className="btn-workspace" onClick={()=>setWorkspaceType("personal")}>
                                <PersonFill size={30} className="hover-color"/><br/>
                                <div className="btn-title">For myself</div>
                                <div className="btn-subtitle">Write better. Think more clearly. Stay organized.</div>
                            </Button>
                        </Col> 
                        <Col md={6} className="btn-container">
                            <Button variant="light" className="btn-workspace" onClick={()=>setWorkspaceType("team")}>
                            <PeopleFill size={30} className="hover-color"/><br/>
                                <div className="btn-title">With my Team</div>
                                <div className="btn-subtitle">Wikis, docs, tasks &amp; projects all in one place.</div>
                            </Button>
                        </Col> 
                        </InputGroup>
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group>
                    <Button className="btn-submit" onClick={handleSubmit}>Create Workspace</Button>
                    </Form.Group>
                    </Row>
                </Form>
            </Row>
        </Col>
        <Col md={4}></Col>
    </Row>
    </>
}