import {Row, Image, Col, Form, Button} from 'react-bootstrap';
import checkfilled from "../../assets/images/checkfilled.png";
import SubjectTitle from './SubjectTitle';

export default function Launcher(){

    const handleSubmit=()=>{
        console.log("LAUNCH");
    }

    return <>
                <Row>
                    <Col md className="icon-container">
                        <Image src={checkfilled} fluid/>
                    </Col>
                </Row>
                <SubjectTitle title={"Congratulations, Eren!"} subtitle={"You have completed onboarding, You can start using the Eden!"} />
                <Row>
                <Col md={4}></Col>
                <Col>
                    <Form.Group>
                        <Button className="btn-submit" onClick={handleSubmit}>Create Workspace</Button>
                    </Form.Group>
                </Col>
                <Col md={4}></Col>
                </Row>
    </>
}