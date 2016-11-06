import React from 'react';
import { shallow } from 'enzyme';
import TrianglesTitleComponent from 'components/shared/TrianglesTitleComponent.react.js';

describe('<TrianglesTitleComponent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<TrianglesTitleComponent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "trianglestitlecomponent-component"', () => {
      expect(component.hasClass('trianglestitlecomponent-component')).to.equal(true);
    });
  });
});
