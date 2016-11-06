import React from 'react';
import { shallow } from 'enzyme';
import MainMenuMobile from 'components/shared/MainMenu_mobile.react.js';

describe('<MainMenuMobile />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<MainMenuMobile />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "mainmenumobile-component"', () => {
      expect(component.hasClass('mainmenumobile-component')).to.equal(true);
    });
  });
});
