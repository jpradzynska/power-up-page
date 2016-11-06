import React from 'react';
import { shallow } from 'enzyme';
import NavLink from 'components/shared/NavLink.react.js';

describe('<NavLink />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<NavLink />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "navlink-component"', () => {
      expect(component.hasClass('navlink-component')).to.equal(true);
    });
  });
});
