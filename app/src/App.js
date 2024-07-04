import { useState } from 'react';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) => (
	<>
	<h1>Step 1</h1>
	<button onClick={()=>goToNext({name:'rajkumar'})}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
	<h1>Step 2</h1>
	<button onClick={()=>goToNext({age: 60})}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
	<h1>Step 3</h1>
  <p>Congratulations you can avail the senior citizen discount</p>
	<button onClick={()=>goToNext({hairColor:'black'})}>Next</button>
	</>
);
const StepFour = ({ goToNext }) => (
	<>
	<h1>Step 4</h1>
	<button onClick={()=>goToNext({hairColor:'black'})}>Next</button>
	</>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
	    setOnboardingData({
        ...onboardingData,
        ...stepData,
    });
     setCurrentIndex(currentIndex+1);
  }

	return (
		<ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}>
			<StepOne />
			<StepTwo />
			{onboardingData.age >= 60 &&<StepThree />}
      <StepFour/>
		</ControlledOnboardingFlow>
	);
}

export default App;