import React, { Component } from 'react';
import './Toast.css';

export default class Toast extends Component {
  // node: '';

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      time: this.props.time || 4000,
    };
  }
  componentDidMount() {
    this.setState({
      isOpen: true,
    });
    setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    }, this.state.time);
  }
  setAlert = (node) => {
    this.node = node;
    if (this.node != null) {
      this.node.addEventListener('webkitAnimationEnd', (e) => {
        if (e.animationName == 'toastCloseAnimation') {
          this.props.onClose();
        }
      });
    }
  };

  render() {
    return (
      <div
        ref={this.setAlert}
        className={
          'custom-alert alert alert-' +
          this.props.toastType +
          (this.state.isOpen ? '' : ' alert-close')
        }
        role="alert"
      >
        {this.props.children}
      </div>
    );
  }
}
