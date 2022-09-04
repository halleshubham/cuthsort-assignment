import UserInfo from "./onboarding/UserInfo"
import WorkspaceInfo from "./onboarding/WorkspaceInfo"
import WorkspaceType from "./onboarding/WorkspaceType"
import Launcher from "./onboarding/Launcher"
import {MemoryRouter, Routes, Route} from "react-router-dom" 
import OnboardingSteps from './onboarding/steps/OnboardingSteps'


export default function Main(){
    return <>

    <MemoryRouter initialEntries={["/"]}>
    <OnboardingSteps />
        <Routes>
          <Route path="/" element={<UserInfo />}/>
          <Route path="WorkspaceInfo" element={<WorkspaceInfo />}/>
          <Route path="WorkspaceType" element={<WorkspaceType />}/>
          <Route path="Launcher" element={<Launcher />}/>
        </Routes>
    </MemoryRouter>       
    </>
}