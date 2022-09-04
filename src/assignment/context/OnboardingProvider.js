import { createContext, useState } from "react"

export const OnboardingContext = createContext()

export default function OnboardingProvider({children}){

    const [step,setStep] = useState(1);

    var onboardingData = {
        current_step:step,
        total_steps:4,
        nextStep: () => {
            setStep(step+1);
        }
        }

    return <>
    <OnboardingContext.Provider value={onboardingData}>
        {children}
    </OnboardingContext.Provider>
    </>
}