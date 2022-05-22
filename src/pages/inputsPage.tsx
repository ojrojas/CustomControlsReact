import React from "react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import ButtonCustom from "../components/buttoncustom";
import InputCustom from "../components/inputcustom";
import ErrorBoundary from "../utils/errorbundary";

const InputsPage = () => {

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/">Go back</Link>
                <Formik
                    initialValues={{
                        text: '',
                        date: '',
                        number: '',
                        password: '',
                        datetimelocal: '',
                        range: '0',
                        month: '',
                    }}
                    validate={(values) => {
                        const empty = "";
                        let errors: any = {};
                        if(values.text === empty) errors.text = "Error text";
                        if(values.date === empty) errors.date = "Error date";
                        if(values.number === empty) errors.number = "Error number";
                        if(values.password === empty) errors.password = "Error password";
                        if(values.datetimelocal === empty) errors.datetimelocal = "Error datetimelocal";
                        if(values.range === "0") errors.range = "Error range";
                        if(values.month === empty) errors.month = "Error month";
                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.clear();
                        console.log("Values ==> ", values);
                    }}
                >{({ values, errors, touched, handleChange, handleBlur }) => (<Form>
                    <h1>Input types</h1>
                    <div style={{ width: 700, margin: 20 }}>
                        <ErrorBoundary
                            children={
                                <InputCustom
                                    id="inputcustom"
                                    labeltext="text input"
                                    name='text'
                                    error={errors}
                                    touched={touched}
                                    inputprops={{
                                        type: "text",
                                        value: values.text,
                                        onChange: (e: any) => { console.log(e); handleChange(e) },
                                        onBlur: (e: any) => { console.log(e); handleBlur(e) }
                                    }}
                                />
                            }
                        />
                    </div>
                    <div style={{ width: 700, margin: 20 }}>
                        <ErrorBoundary
                            children={
                                <InputCustom
                                    id="datecustom"
                                    labeltext="date input"
                                    name='date'
                                    error={errors}
                                    touched={touched}
                                    inputprops={{
                                        type: "date",
                                        value: values.date,
                                        onChange: (e: any) => { console.log(e); handleChange(e) },
                                    }}
                                />
                            }
                        />
                    </div>
                    <div style={{ width: 700, margin: 20 }}>
                        <ErrorBoundary
                            children={
                                <InputCustom
                                    id="numbercustom"
                                    labeltext="number input"
                                    name="number"
                                    error={errors}
                                    touched={touched}
                                    inputprops={{
                                        type: "number",
                                        value: values.number,
                                        onChange: (e: any) => { console.log(e); handleChange(e) },
                                    }}
                                />
                            }
                        />
                    </div>
                    <div style={{ width: 700, margin: 20 }}>
                        <ErrorBoundary
                            children={
                                <InputCustom
                                    id="passwordrcustom"
                                    labeltext="password input"
                                    name="password"
                                    error={errors}
                                    touched={touched}
                                    inputprops={{
                                        type: "password",
                                        value: values.password,
                                        onChange: (e: any) => { console.log(e); handleChange(e) },
                                    }}
                                />
                            }
                        />
                    </div>
                    <div style={{ width: 700, margin: 20 }}>
                        <ErrorBoundary
                            children={
                                <InputCustom
                                    id="datetimelocalcustom"
                                    labeltext="datetime input"
                                    name='datetimelocal'
                                    error={errors}
                                    touched={touched}
                                    inputprops={{
                                        type: "datetime-local",
                                        value: values.datetimelocal,
                                        onChange: (e: any) => { console.log(e); handleChange(e) }
                                    }}
                                />
                            }
                        />
                    </div>
                    <div style={{ width: 700, margin: 20 }}>
                        <ErrorBoundary
                            children={
                                <InputCustom
                                    id="rangecustom"
                                    labeltext="range input"
                                    name='range'
                                    error={errors}
                                    touched={touched}
                                    inputprops={{
                                        type: "range",
                                        min:"0",
                                        max:"100",
                                        value: values.range,
                                        onChange: (e: any) => { console.log(e.target.value); handleChange(e) },
                                    }}
                                />
                            }
                        />
                    </div>
                    <div style={{ width: 700, margin: 20 }}>
                        <ErrorBoundary
                            children={
                                <InputCustom
                                    id="monthcustom"
                                    labeltext="month input"
                                    name='month'
                                    error={errors}
                                    touched={touched}
                                    inputprops={{
                                        type: "month",
                                        value: values.month,
                                        onChange: (e: any) => { console.log(e); handleChange(e) },
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

export default InputsPage;