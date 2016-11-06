import React from 'react';
import { shallow } from 'enzyme';
import LogoComponent from 'components/shared/LogoComponent.react.js';

describe('<LogoComponent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<LogoComponent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "logocomponent-component"', () => {
      expect(component.hasClass('logocomponent-component')).to.equal(true);
    });
  });
});
