import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { FormControl } from 'react-bootstrap';

import Store from '../store';
import PhotosActions from '../actions/actionCreators';
import Pics from './Pics';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit(e) {
        e.preventDefault();
        Store.dispatch(PhotosActions.loadPhotosAsync(Store.getState().photos.get('searchValue')));
    }

    render() {
        let photoContainer = (this.props.photos.get('photoList'))
            ? <Pics photos={this.props.photos.get('photoList')}
                currentPhoto={this.props.photos.get('currentPhoto')} />
            : <div></div>;

        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl
                            type="text"
                            value={this.props.photos.get('searchValue')}
                            placeholder="Search..."
                            onChange={(e) => this.props.dispatch(PhotosActions.updateTextInput(e.target.value))}
                            style={{ width: '500px', display: 'block', margin: 'auto' }} />
                    </form>

                    {photoContainer}

                </div>

            </div>
        );
    }
}
