import React from 'react';
import { shallow } from 'enzyme';
import Contact from 'components/contact/Contact.react.js';

describe('<Contact />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Contact />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "contact-component"', () => {
      expect(component.hasClass('contact-component')).to.equal(true);
    });
  });
});
