import React from 'react';
import Immutable from 'immutable';
import renderer from 'react-test-renderer';
import { Navigation } from '../../client/components/Navigation';

describe('COMPONENT > NAVIGATION > Snapshot', () => {
    it('should capture the Snapshot of the Navigation', () => {
        const component = renderer.create(<Navigation direction={'left'} />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});