import { Row } from "react-bootstrap"

export default function SubjectTitle({title, subtitle}) {
    return <>
    <Row>
        <h2 className="userinfo-title">{title}</h2>
        <p className="userinfo-subtitle">{subtitle}</p>
    </Row></>
}