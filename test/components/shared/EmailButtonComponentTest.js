import React from 'react';
import { shallow } from 'enzyme';
import EmailButtonComponent from 'components/shared/EmailButtonComponent.react.js';

describe('<EmailButtonComponent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<EmailButtonComponent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "emailbuttoncomponent-component"', () => {
      expect(component.hasClass('emailbuttoncomponent-component')).to.equal(true);
    });
  });
});
