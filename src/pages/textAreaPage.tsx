import React from "react";
import { Form, Formik, validateYupSchema } from "formik";
import { Link } from "react-router-dom";
import ButtonCustom from "../components/buttoncustom";
import TextAreaCustom from "../components/textareacustom";
import ErrorBoundary from "../utils/errorbundary";

const TextAreaPage = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/">Go back</Link>
                <h1>Textarea input</h1>
                <Formik
                    initialValues={{ textArea: '' }}
                    validate={(values) => {
                        const errors:any = {};
                        if(values.textArea === '') errors.textArea = "Error into textarea"
                        return errors;
                    }}
                    onSubmit={() => {

                    }}
                >{({ values, handleBlur, handleChange, errors, touched }) => (
                    <Form>
                       <>
                       {console.log(values)}
                       </> 
                       
                        <div style={{ width: 700, margin: 20 }}>
                            <ErrorBoundary
                                children={
                                    <TextAreaCustom
                                        id="inputcustom"
                                        rows={20}
                                        cols={10}
                                        name='textArea'
                                        error={errors}
                                        touched={touched}
                                        inputprops={{
                                            type: "text",
                                            value: values.textArea,
                                            onChange: (e: any) => { console.log(e); handleChange(e) },
                                            onBlur:handleBlur
                                        }}
                                    />
                                }
                            />
                        </div>
                        <div style={{ width: 700, margin: 20 }}>
                            <ButtonCustom
                                id="btnSubmitTypeButton"
                                reference={null}
                                nodeElement={
                                    (<>Submit
                                    </>)}
                                buttonprops={{
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
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default TextAreaPage;