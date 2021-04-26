import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = value =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = fieldRenderProps => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export default function App() {
  const handleSubmit = dataItem => alert(JSON.stringify(dataItem, null, 2));
  return (
    <div>
      <fieldset className="k-mb-4">
        <legend>Headings</legend>
        <h1 className="k-h1">Typography</h1>
        <h2 className="k-h2">Typography</h2>
        <h3 className="k-h3">Typography</h3>
        <h4 className="k-h4">Typography</h4>
        <h5 className="k-h5">Typography</h5>
        <h6 className="k-h6">Typography</h6>
      </fieldset>
      <fieldset className="k-mb-4">
        <legend>Buttons</legend>
        <div className="k-mb-4">
          <Button className="k-mr-4">Default</Button>
          <Button className="k-mr-4" disabled>
            Default disabled
          </Button>
        </div>
        <div>
          <Button className="k-mr-4" primary>
            Primary
          </Button>
          <Button primary disabled>
            Primary disabled
          </Button>
        </div>
      </fieldset>
      <fieldset className="k-mb-4">
        <legend>Form</legend>
        <Form
          onSubmit={handleSubmit}
          render={formRenderProps => (
            <FormElement style={{ maxWidth: 650 }}>
              <fieldset className={"k-form-fieldset"}>
                <legend className={"k-form-legend"}>
                  Please fill in the fields:
                </legend>
                <div className="mb-3">
                  <Field
                    name={"firstName"}
                    component={Input}
                    label={"First name"}
                  />
                </div>

                <div className="mb-3">
                  <Field
                    name={"lastName"}
                    component={Input}
                    label={"Last name"}
                  />
                </div>

                <div className="mb-3">
                  <Field
                    name={"email"}
                    type={"email"}
                    component={EmailInput}
                    label={"Email"}
                    validator={emailValidator}
                  />
                </div>
              </fieldset>
              <div className="k-form-buttons">
                <button
                  type={"submit"}
                  className="k-button"
                  disabled={!formRenderProps.allowSubmit}
                >
                  Submit
                </button>
              </div>
            </FormElement>
          )}
        />
      </fieldset>
    </div>
  );
}
