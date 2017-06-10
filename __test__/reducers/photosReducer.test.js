import reducer from '../../client/reducers/photosReducer';
import constants from '../../client/constants/constants';
import Immutable from 'immutable';
import * as matchers from 'jest-immutable-matchers';

describe('REDUCER > PHOTOS', () => {
    beforeEach(function () {
        jest.addMatchers(matchers);
    });

    it('should return the photos initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqualImmutable(
            Immutable.fromJS(
                {
                    photoList: [],
                    currentPhoto: 0,
                    searchValue: ''
                })
            );
    });

    it('should handle LOAD_PHOTOS', () => {
        let expectedPhotoList = Immutable.List([Immutable.Map({
            server: '4275',
            isfriend: 0,
            isfamily: 0,
            secret: '3124f2e6bb',
            ispublic: 1,
            owner: '80048637@N02',
            farm: 5,
            title: '#Cars 2015 Chevrolet Corvette Z06 [5529 × 3686] [OC]',
            id: '35087667241'
        })]);

        expect(
            reducer(undefined, {
                type: constants.LOAD_PHOTOS,
                photos: [{
                    server: '4275',
                    isfriend: 0,
                    isfamily: 0,
                    secret: '3124f2e6bb',
                    ispublic: 1,
                    owner: '80048637@N02',
                    farm: 5,
                    title: '#Cars 2015 Chevrolet Corvette Z06 [5529 × 3686] [OC]',
                    id: '35087667241'
                }]
            })
        ).toEqualImmutable(
            Immutable.Map(
                {
                    photoList: expectedPhotoList,
                    currentPhoto: 0,
                    searchValue: ''
                })
            );
    });

});