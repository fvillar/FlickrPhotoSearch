import axios from 'axios';
import moxios from 'moxios'; //https://github.com/mzabriskie/moxios
import sinon from 'sinon';
import { equal } from 'assert';

import actions from '../../client/actions/actionCreators';
import constants from '../../client/constants/constants';


describe('ACTIONS', () => {

    it('should create an action to update text input', () => {
        const value = 'a';
        const expectedAction = {
            type: constants.UPDATE_TEXTINPUT,
            value
        };
        expect(actions.updateTextInput(value)).toEqual(expectedAction);
    });

    it('should create an action to load the photos', () => {
        const photos = [
            {
                server: '4275',
                isfriend: 0,
                isfamily: 0,
                secret: '3124f2e6bb',
                ispublic: 1,
                owner: '80048637@N02',
                farm: 5,
                title: '#Cars 2015 Chevrolet Corvette Z06 [5529 × 3686] [OC]',
                id: '35087667241'
            }];
        const expectedAction = {
            type: constants.LOAD_PHOTOS,
            photos
        };
        expect(actions.loadPhotos(photos)).toEqual(expectedAction);
    });

    it('should create an action to add to the counter', () => {
        const expectedAction = {
            type: constants.COUNTER_UP
        };
        expect(actions.counterUp()).toEqual(expectedAction);
    });

    it('should create an action to substract to the counter', () => {
        const expectedAction = {
            type: constants.COUNTER_DOWN
        };
        expect(actions.counterDown()).toEqual(expectedAction);
    });

    it('should create an action to set the counter', () => {
        const value = 2;
        const expectedAction = {
            type: constants.SET_COUNTER,
            value
        };
        expect(actions.setCounter(value)).toEqual(expectedAction);
    });

});

describe('ASYNC ACTIONS', () => {

    it('creates LOAD_PHOTOS action when loadPhotosAsync has been done', (done) => {

        beforeEach(function () {
            // import and pass your custom axios instance to this method
            moxios.install();
        });

        afterEach(function () {
            // import and pass your custom axios instance to this method
            moxios.uninstall();
        });

        moxios.withMock(() => {
            let mockResponse = sinon.spy();
            let apiKey = 'fda49c8cb3942dab1d64780f08ed71fe';
            let searchValue = 'car';

            axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchValue}&per_page=4&format=json&nojsoncallback=1`).then(mockResponse);
            moxios.wait(() => {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response:
                    [
                        {
                            server: '4275',
                            isfriend: 0,
                            isfamily: 0,
                            secret: '3124f2e6bb',
                            ispublic: 1,
                            owner: '80048637@N02',
                            farm: 5,
                            title: '#Cars 2015 Chevrolet Corvette Z06 [5529 × 3686] [OC]',
                            id: '35087667241'
                        },
                        {
                            server: '4221',
                            isfriend: 0,
                            isfamily: 0,
                            secret: '0148ff8dd3',
                            ispublic: 1,
                            owner: '62482157@N04',
                            farm: 5,
                            title: 'Guards Red.',
                            id: '35177183146'
                        }]
                }).then((response) => {
                    let list = [
                        {
                            server: '4275',
                            isfriend: 0,
                            isfamily: 0,
                            secret: '3124f2e6bb',
                            ispublic: 1,
                            owner: '80048637@N02',
                            farm: 5,
                            title: '#Cars 2015 Chevrolet Corvette Z06 [5529 × 3686] [OC]',
                            id: '35087667241'
                        },
                        {
                            server: '4221',
                            isfriend: 0,
                            isfamily: 0,
                            secret: '0148ff8dd3',
                            ispublic: 1,
                            owner: '62482157@N04',
                            farm: 5,
                            title: 'Guards Red.',
                            id: '35177183146'
                        }];
                    equal(list.length, response.data.length);

                    equal(list[0].server, response.data[0].server);
                    equal(list[0].isfriend, response.data[0].isfriend);
                    equal(list[0].isfamily, response.data[0].isfamily);
                    equal(list[0].secret, response.data[0].secret);
                    equal(list[0].ispublic, response.data[0].ispublic);
                    equal(list[0].owner, response.data[0].owner);
                    equal(list[0].farm, response.data[0].farm);
                    equal(list[0].title, response.data[0].title);
                    equal(list[0].id, response.data[0].id);

                    equal(list[1].server, response.data[1].server);
                    equal(list[1].isfriend, response.data[1].isfriend);
                    equal(list[1].isfamily, response.data[1].isfamily);
                    equal(list[1].secret, response.data[1].secret);
                    equal(list[1].ispublic, response.data[1].ispublic);
                    equal(list[1].owner, response.data[1].owner);
                    equal(list[1].farm, response.data[1].farm);
                    equal(list[1].title, response.data[1].title);
                    equal(list[1].id, response.data[1].id);

                    done();
                });
            });
        });
    });
});