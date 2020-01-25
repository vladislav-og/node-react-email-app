import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { reduxForm, Field,  } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash'
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderFields() {
        return _.map(formFields, ({label, name}) => {
            return <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to='/survey' className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    <button type="submit" className='teal btn-flat right white-text'>
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    formFields.forEach(({name}) => {
        if (!values[name]) {
            errors[name] = `You must provide ${name}`
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm);