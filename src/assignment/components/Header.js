import { Row, Col } from "react-bootstrap"
import icon from"../assets/images/icon-2.png"

export default function Header(){
    return <>
    <Row >
        <Col md={3}></Col>
        <Col md>
            <h2 className="header-content"> <img src={icon}></img> Eden</h2>

        </Col>
        <Col md={3}></Col>
    </Row>
    

    </>
}