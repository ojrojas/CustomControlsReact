import React from "react";
import { Form, Formik } from "formik";
import TextAreaCustom from "../components/textareacustom";
import ErrorBoundary from "../utils/errorbundary";
import { Link } from "react-router-dom";
import SelectCustom, { IOptionSelect } from "../components/selectcustom";
import ButtonCustom from "../components/buttoncustom";

const SelectPage = () => {
  const dataInitial = () => {
      const data:IOptionSelect[]= [];
      for (let index = 0; index < 10; index++) {
          data.push({nodeElement: `⌾ option ${index}`, value:index});
      }
      return data;
  }


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/">Go back</Link>
                <h1>Select input</h1>
                <Formik
                    initialValues={{
                        select: ''
                    }}
                    validate={(values) => {
                        const errors: any = {};
                        if (values.select === '') errors.select = "Error, type a text"
                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.clear();
                        console.log("values ==> ", JSON.stringify(values, null, 2))
                    }}
                >{({ values, handleChange, handleBlur, errors, touched }) => (
                    <Form>
                        <ErrorBoundary
                            children={
                                <SelectCustom
                                    id="selectcustom"
                                    name="select"
                                    error={errors}
                                    touched={touched}
                                    data={dataInitial()}
                                    labelDefaultSelect= "Select item"
                                    inputprops={{
                                        value:values.select,
                                        onChange: (e: any) => { console.log(e); handleChange(e); }
                                    }}
                                />
                            }
                        />
                        <ButtonCustom
                            id="btnSubmitTypeButton"
                            reference={null}
                            nodeElement={
                                (<>Submit
                                </>)}
                            buttonprops={{
                                style:{ margin:20},
                                type: 'submit'
                            }}
                        />
                         <ButtonCustom
                            id="btnResetTypeButton"
                            reference={null}
                            nodeElement={
                                (<>Reset
                                </>)}
                            buttonprops={{
                                style:{ margin:20},
                                type: 'reset'
                            }}
                        />
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default SelectPage;