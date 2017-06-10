import React from 'react';
import { shallow } from 'enzyme';
import Photo from '../../client/components/Photo';
import Immutable from 'immutable';

function setup() {
    
    const enzymeWrapper = shallow(<Photo photo={{'server': '4288',
                'isfriend': 0,
                'isfamily': 0,
                'secret': '61400f944b',
                'ispublic': 1,
                'owner': '15023277@N02',
                'farm': 5,
                'title': 'Another view of the world',
                'id': '34833807180'}} />);

    return {
        enzymeWrapper
    };
}

describe('COMPONENT > PHOTO', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();

        let path = 'https://farm5.staticflickr.com/4288/34833807180_61400f944b.jpg';
        const ImageProps = enzymeWrapper.find('Image').first().props();
        expect(ImageProps.src).toEqual(path);
    });

});