import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from 'components/shared/ButtonComponent.react.js';

describe('<ButtonComponent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<ButtonComponent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "buttoncomponent-component"', () => {
      expect(component.hasClass('buttoncomponent-component')).to.equal(true);
    });
  });
});
