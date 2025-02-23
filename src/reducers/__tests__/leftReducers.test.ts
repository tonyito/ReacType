import * as reducers from '../leftReducers';
import cloneDeep from '../../helperFunctions/cloneDeep';
import * as interfaces from '../../interfaces/Interfaces';
import * as types from '../../actionTypes/index';
describe('Left reducers', () => {
  let state: any;
  beforeEach(() => {
    state = {
      editMode: -1,
      testing: 'testingReducer',
      codeReadOnly: true,
      components: [
        {
          changed: true,
          childrenArray: [{}],
          classBased: false,
          code: '....',
          color: '#FF6D00',
          focusChild: {},
          focusChildId: -1,
          id: 1,
          nextChildId: 3,
          nextPropId: 2,
          position: {
            height: 850,
            width: 500,
            x: 70,
            y: 100
          },
          props: [],
          stateful: false,
          title: 'App'
        },
        {
          changed: false,
          childrenArray: [{}],
          classBased: false,
          code: '....',
          color: '#FFF',
          focusChild: {},
          focusChildId: 0,
          id: 99,
          nextChildId: 9,
          nextPropId: 9,
          position: {
            height: 850,
            width: 500,
            x: 70,
            y: 100
          },
          props: [],
          stateful: false,
          title: 'TEST'
        }
      ],
      focusComponent: 'App',
      history: []
    };
  });
  // describe('toggleComponentState', () => {
  //   it('inverts the statefulness of component passed in', () => {});
  // });
  // toggleEditMode reducer allows changing of component names in left container
  describe('toggleEditMode reducer', () => {
    it('should return the same state if id === 1', () => {
      const action = {
        type: 'EDIT_MODE',
        payload: { id: 1 }
      };
      const newState = reducers.toggleEditMode(state, action.payload);
      expect(newState).toStrictEqual(state);
    });
    it('should return new state with updated editMode', () => {
      const action = {
        type: 'EDIT_MODE',
        payload: { id: 2 }
      };
      const newState = reducers.toggleEditMode(state, action.payload);
      expect(newState.editMode).toEqual(action.payload.id);
    });
  });
  // TEST CHANGE FOCUS COMPONENT: test component will add "look" for "test" after it's added
  describe('changeFocusComponent reducer', () => {
    it('should change the focus component title', () => {
      const action = {
        type: types.CHANGE_FOCUS_COMPONENT,
        payload: { title: 'TEST' }
      };
      const newState = reducers.changeFocusComponent(state, action.payload);
      // expecting new payload of "title" to the payload we just created
      expect(newState.focusComponent.title).toEqual(action.payload.title);
    });
  });
  // TEST IMAGE SOURCE CHANGE: image URL should be changed after local state is changed
  describe('changeImageSource reducer', () => {
    it('should change the change the image source', () => {
      const action = {
        type: types.CHANGE_IMAGE_SOURCE,
        payload: { imageSource: 'www.test.com/test.img' }
      };
      const newState = reducers.changeImageSource(state, action.payload);
      // expecting new payload of "title" to the payload we just created
      expect(newState.imageSource).toEqual(action.payload.imageSource);
    });
  });
  // TEST DELETE CHILD: test child should be deleted from local state components array
  // describe('deleteChild reducer', () => {
  //   it('should delete test component', () => {
  //     //   const action = {
  //     //     type: types.CHANGE_IMAGE_SOURCE,
  //     //     payload: { imageSource: 'www.test.com/test.img' }
  //     //   };
  //     const model = {
  //       parentId = state.focusComponent.id,
  //       childId = state.focusChild.childId,
  //       calledFromDeleteComponent = false
  //     };
  //     const newState = reducers.deleteChild();
  //     // expecting new payload of "title" to the payload we just created
  //     expect(newState.imageSource).toEqual(action.payload.imageSource);
  //   });
  // });
  // NEXT TEST
});
