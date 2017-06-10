import React from 'react';
import Immutable from 'immutable';
import renderer from 'react-test-renderer';
import { PhotoStrip } from '../../client/components/PhotoStrip';

let photos = Immutable.List(
    [{
        'server': '4288',
        'isfriend': 0,
        'isfamily': 0,
        'secret': '61400f944b',
        'ispublic': 1,
        'owner': '15023277@N02',
        'farm': 5,
        'title': 'Another view of the world',
        'id': '34833807180'
    },
    {
        'server': '4288',
        'isfriend': 0,
        'isfamily': 0,
        'secret': '91a80b805f',
        'ispublic': 1,
        'owner': '141685066@N03',
        'farm': 5,
        'title': 'Volkswagen drivers small talk',
        'id': '35180946186'
    }]
);

describe('COMPONENT > PHOTOSTRIP > Snapshot', () => {
    it('should capture the Snapshot of the Photo Strip', () => {
        const component = renderer.create(<PhotoStrip photos={photos} />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});