import React from 'react';
import { shallow } from 'enzyme';
import TeamMemberComponent from 'components/shared/TeamMemberComponent.react.js';

describe('<TeamMemberComponent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<TeamMemberComponent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "teammembercomponent-component"', () => {
      expect(component.hasClass('teammembercomponent-component')).to.equal(true);
    });
  });
});
