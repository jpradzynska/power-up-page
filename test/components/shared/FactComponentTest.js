import React from 'react';
import { shallow } from 'enzyme';
import FactComponent from 'components/shared/FactComponent.react.js';

describe('<FactComponent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<FactComponent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "factcomponent-component"', () => {
      expect(component.hasClass('factcomponent-component')).to.equal(true);
    });
  });
});
