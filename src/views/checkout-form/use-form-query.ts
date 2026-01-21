import { useSearchParams } from "react-router";

import { useAppSelector } from "#store/hooks";
import { getStepsCleared } from "#store/slices/form-slice";

const getOrderedStep = (stepsCleared: number, step: number) => {
  if (step > stepsCleared + 1) {
    return stepsCleared + 1;
  }
  return step;
};

export const useFormQuery = () => {
  const stepsCleared = useAppSelector(getStepsCleared);
  const [searchParams, setSearchParams] = useSearchParams();
  const currStep = searchParams.get("step");

  return {
    setStep: (step: number) => setSearchParams({ step: step.toString() }),
    step: currStep ? getOrderedStep(stepsCleared, Number(currStep)) : null,
  };
};
