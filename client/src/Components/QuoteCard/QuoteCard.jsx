import {React, Component} from 'react';
import "./QuoteCard.css"

export default class QuoteCard extends Component {

    state={
        quote: {},
    }

    render() {
        return(
            <div className="main">
                <h1>Hello QuoteCard</h1>
            </div>
        )
    }

}