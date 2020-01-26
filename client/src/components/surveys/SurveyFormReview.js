import React from 'react';
import { connect } from "react-redux";
import formFields from './formFields';
import * as actions from "../../actions"
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history}) => {
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
                <i className="material-icons right">cancel</i>
            </button>
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));