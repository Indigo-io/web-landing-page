import LayoutSimple from "components/LayoutSimple";
import StepWizard from "react-step-wizard";
import Step1 from "components/Wizard/Step1";
import Step2 from "components/Wizard/Step2";
import Step3 from "components/Wizard/Step3";
import Step4 from "components/Wizard/Step4";
import Step5 from "components/Wizard/Step5";
import Step6 from "components/Wizard/Step6";
import Step7 from "components/Wizard/Step7";
import Step8 from "components/Wizard/Step8";
import Step9 from "components/Wizard/Step9";
import Step10 from "components/Wizard/Step10";
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
    <LayoutSimple title="¡Tu cambio empieza ahora!">
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
                  <Step1 />
                  <Step2 setProgress={setProgress} dispatch={dispatch} />
                  <Step3 setProgress={setProgress} dispatch={dispatch} />
                  <Step4 setProgress={setProgress} dispatch={dispatch} />
                  <Step5 setProgress={setProgress} dispatch={dispatch} />
                  <Step6 setProgress={setProgress} dispatch={dispatch} />
                  <Step7 setProgress={setProgress} dispatch={dispatch} />
                  <Step8 setProgress={setProgress} dispatch={dispatch} />
                  <Step9
                    setProgress={setProgress}
                    state={state}
                    dispatch={dispatch}
                  />
                  <Step10 />
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
