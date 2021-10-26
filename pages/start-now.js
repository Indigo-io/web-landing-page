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
import Diseases from "components/Wizard/Diseases";
import Final from "components/Wizard/Final";
import Fitness from "components/Wizard/Fitness";
import { useState, useReducer } from "react";
import { Toaster } from "react-hot-toast";

export default function StartNow() {
  const [progress, setProgress] = useState(0);
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
    <LayoutSimple title="Tu cambio empieza ahora!">
      <main id="main">
        <section className="section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6 offset-md-3" data-aos="fade-up">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <StepWizard>
                  <Presentation />
                  <UserInformation
                    setProgress={setProgress}
                    dispatch={dispatch}
                  />
                  <PersonalInformation
                    setProgress={setProgress}
                    dispatch={dispatch}
                  />
                  <BodyInformation
                    setProgress={setProgress}
                    dispatch={dispatch}
                  />
                  <Motivation setProgress={setProgress} dispatch={dispatch} />
                  <Focus setProgress={setProgress} dispatch={dispatch} />
                  <Nutrition setProgress={setProgress} dispatch={dispatch} />
                  <Fitness setProgress={setProgress} dispatch={dispatch} />
                  <Activity setProgress={setProgress} dispatch={dispatch} />
                  <Diseases
                    setProgress={setProgress}
                    state={state}
                    dispatch={dispatch}
                  />
                  <Final />
                </StepWizard>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Toaster />
    </LayoutSimple>
  );
}
