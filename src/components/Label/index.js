

import React from "react";

export default class Label extends React.Component {
  render() {
    const { left, top, sign } = this.props
    return <text style={{ fontSize: 14.58310032, fontWeight: 'bold', fill: '#333333', fontFamily: 'Arial' }} fontSize="14.5831" fontWeight="bold" y={top} x={left}>{sign}</text>
  }
}