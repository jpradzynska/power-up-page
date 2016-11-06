import React from 'react';
import { shallow } from 'enzyme';
import Releases from 'components/games/Games.react.js';

describe('<Releases />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Releases />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "games-component"', () => {
      expect(component.hasClass('games-component')).to.equal(true);
    });
  });
});
