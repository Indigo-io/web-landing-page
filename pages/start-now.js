import LayoutSimple from "components/LayoutSimple";
import StepWizard from "react-step-wizard";
import Presentation from "components/Wizard/Presentation";
import UserInformation from "components/Wizard/UserInformation";
import PersonalInformation from "components/Wizard/PersonalInformation";
import BodyInformation from "components/Wizard/BodyInformation";
import Motivation from "components/Wizard/Motivation";
import Focus from "components/Wizard/Focus";
import Nutrition from "components/Wizard/Nutrition";
import Activity from "components/Wizard/Activity";
import Investment from "components/Wizard/Investment";
import Final from "components/Wizard/Final";
import Intolerance from "components/Wizard/Intolerance";
import { useReducer } from "react";
import { Toaster } from "react-hot-toast";
import Diseases from "components/Wizard/Diseases";
import Referred from "../components/Wizard/Referred";

export default function StartNow() {
  const initialState = {};

  function reducer(state, action) {
    switch (action.type) {
      case "update":
        return {
          ...state,
          ...action.payload,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutSimple>
      <div className="start-now">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 offset-md-3" data-aos="fade-up">
              <StepWizard>
                <Presentation />
                <UserInformation dispatch={dispatch} />
                <PersonalInformation dispatch={dispatch} />
                <BodyInformation dispatch={dispatch} />
                <Motivation dispatch={dispatch} />
                <Nutrition dispatch={dispatch} />
                <Intolerance dispatch={dispatch} />
                <Focus dispatch={dispatch} />
                <Activity dispatch={dispatch} />
                <Diseases dispatch={dispatch} />
                <Investment dispatch={dispatch} />
                <Referred state={state} dispatch={dispatch} />
                <Final />
              </StepWizard>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </LayoutSimple>
  );
}
