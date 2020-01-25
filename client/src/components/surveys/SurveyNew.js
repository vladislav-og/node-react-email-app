import React, {Component} from "react";
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = { new: true};
    // }
    // IT'S SAME AS BELOW THANKS TO BABEL PLUGIN IN CREATE REACT APP

    state = { showFormReview: false};

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={ () => this.setState({showFormReview: false})}/>;
        }
        return <SurveyForm onSurveySubmit={ () => this.setState({showFormReview: true})}/>;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default SurveyNew;