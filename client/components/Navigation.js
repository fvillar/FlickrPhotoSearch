import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import PhotosActions from '../actions/actionCreators';

class Navigation extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onClick(direction){
        if(direction == 'up')
            this.props.dispatch(PhotosActions.counterUp());
        else
            this.props.dispatch(PhotosActions.counterDown());
    }

    render() {

        if (this.props.direction == 'right') {
            return (
                <Button className="fa fa-arrow-right"
                    style={{ float: 'rigth'}} 
                    onClick={ () => this.onClick('up') }/>
            );
        } else {
            return (
                <Button className="fa fa-arrow-left" 
                style={{ float: 'left'}}
                onClick={ () => this.onClick('down') }/>
            );
        }
    }
}

export default connect()(Navigation);
