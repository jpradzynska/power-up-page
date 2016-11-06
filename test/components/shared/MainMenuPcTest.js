import React from 'react';
import { shallow } from 'enzyme';
import MainMenuPc from 'components/shared/MainMenu_PC.react.js';

describe('<MainMenuPc />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<MainMenuPc />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "mainmenupc-component"', () => {
      expect(component.hasClass('mainmenupc-component')).to.equal(true);
    });
  });
});
