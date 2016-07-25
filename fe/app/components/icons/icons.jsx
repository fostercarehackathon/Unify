// deps
import React, { Component } from 'react';

// SVG icons sprite
const iconsSprite = require('icons/sprite.html');

export default class Icons extends Component {
  icons() {
    return { __html: iconsSprite };
  }

  render() {
    const style = {
      display: 'none',
      height: 0
    };

    return (
      <div className="IconsWrap" style={style} dangerouslySetInnerHTML={this.icons()}></div>
    );
  }
}
