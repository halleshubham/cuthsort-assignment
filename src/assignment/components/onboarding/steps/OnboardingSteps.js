import { useContext } from "react"
import {OnboardingContext} from '../../../context/OnboardingProvider'
import { Row, Col } from "react-bootstrap";

export default function OnboardingSteps() {

    const onboardingCtx = useContext(OnboardingContext);

return <>
    <Row className="step-strip">
        <Col md={4} className="col-xs-4"></Col>
        <Col md={4} className="col-xs-4">
            <Row>
                {
                    Array.from({length:onboardingCtx.total_steps}).map((_item, index) => {
                        return <Col key={index} md={3} xs={3}>
                            <StepState index={index+1} currentStep={onboardingCtx.current_step}/>
                        </Col>
                    })
                }
            </Row>

        </Col>
        <Col md={4}></Col>
    </Row>
    </>
}


export function StepState({index, currentStep}){

    const getClassName = () => {
        return index <= currentStep ? "circle active":"circle";
    }

    return <>
    <div id={index} className={getClassName()}>
        <div className="circle-text">{index}</div>
    </div>
    </>
}