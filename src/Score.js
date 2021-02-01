import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <ul>
                {this.props.scores.map((score) => {
                    return (<li>{score.date}: {score.score}</li>)
                })}
            </ul>
        )
    }
}

export default Score;