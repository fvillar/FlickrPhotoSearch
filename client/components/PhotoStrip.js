import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import _ from 'lodash';
import PhotosActions from '../actions/actionCreators';

export class PhotoStrip extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onClickImage(item){
        this.props.dispatch(PhotosActions.setCounter(item));        
    }

    render() {

        const { photos } = this.props;

        if (photos.length > 0) {

            let strip = _.map(photos, (photo, i) => {
                let path = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

                return (
                    <div key={i}>
                        <Image key={i}
                            src={path}
                            style={{ height: '100px', width: '100px' }}
                            onClick={() => this.onClickImage(i)}
                            responsive />
                    </div>
                );
            });

            return (
                <div style={{
                    backgroundColor: 'black',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    {strip}
                </div>
            );

        } else {

            return (
                <div>
                </div>
            );
        }
    }
}

export default connect()(PhotoStrip);