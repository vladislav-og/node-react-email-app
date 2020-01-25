import React from 'react';
import { connect } from "react-redux";
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues}) => {
    const reviewField = formFields.map(({label, name}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                {reviewField}
            </div>
            <button className="yellow darken-3 btn-flat left white-text" onClick={onCancel}>
                Go Back
                <i className="material-icons right">done</i>
            </button>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}
export default connect(mapStateToProps)(SurveyFormReview);