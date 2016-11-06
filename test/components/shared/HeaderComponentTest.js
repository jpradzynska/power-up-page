import React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from 'components/shared/HeaderComponent.react.js';

describe('<HeaderComponent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<HeaderComponent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "headercomponent-component"', () => {
      expect(component.hasClass('headercomponent-component')).to.equal(true);
    });
  });
});
