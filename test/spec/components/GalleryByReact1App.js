'use strict';

describe('GalleryByReact1App', () => {
  let React = require('react/addons');
  let GalleryByReact1App, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GalleryByReact1App = require('components/GalleryByReact1App.js');
    component = React.createElement(GalleryByReact1App);
  });

  it('should create a new instance of GalleryByReact1App', () => {
    expect(component).toBeDefined();
  });
});
