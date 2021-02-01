import React, { Component } from 'react';
import Score from './Score'

class Student extends Component {

    render() {
        return (
            <div>
                <p>Students Name: {this.props.student.name}</p>
                <p>Bio: {this.props.student.bio}</p>
                <Score scores={this.props.student.scores} />
            </div>
        )
    }
}

export default Student;