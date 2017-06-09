import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import _ from 'lodash';

class PhotoStrip extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onClickImage(image){
        console.log('image');
        
    }

    render() {

        const { photos } = this.props;

        if (photos.length > 0) {

            let strip = _.map(photos, (photo, i) => {
                let path = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

                return (
                    <div key={i}>
                        <Image itemKey={i}
                            src={path}
                            style={{ height: '100px', width: '100px' }}
                            onClick={(i) => this.onClickImage(i)}
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