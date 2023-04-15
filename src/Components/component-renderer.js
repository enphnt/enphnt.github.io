// A React component that renders another component and its code
import React from 'react';
import Prism from 'prismjs';

class ComponentRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 350, // initial width of the code div
      isMobile: false // flag to indicate if the screen width is less than 600px
    };
    this.resizerRef = React.createRef(); // reference to the resizer div
    this.codeRef = React.createRef(); // reference to the code div
    this.dragging = false; // flag to indicate if the user is dragging the resizer
    this.startX = 0; // initial x position of the mouse when dragging starts
    this.startWidth = 0; // initial width of the code div when dragging starts
  }

  componentDidMount() {
    // add event listeners for mouse move and mouse up
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    // add event listener for window resize
    window.addEventListener('resize', this.handleResize);
    // check the initial window width and set the isMobile state accordingly
    this.handleResize();
  }

  componentWillUnmount() {
    // remove event listeners for mouse move and mouse up
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    // remove event listener for window resize
    window.removeEventListener('resize', this.handleResize);
  }

  handleMouseDown = (e) => {
    // handle mouse down on the resizer div
    e.preventDefault();
    // set the dragging flag to true
    this.dragging = true;
    // get the current x position of the mouse
    this.startX = e.clientX;
    // get the current width of the code div
    this.startWidth = parseInt(
      window.getComputedStyle(this.codeRef.current).width,
      10
    );
  };

  handleMouseMove = (e) => {
    // handle mouse move on the document
    e.preventDefault();
    // check if the user is dragging the resizer and if it is enabled (when isMobile = false)
    if (this.dragging && !this.state.isMobile) {
      // calculate the new width of the code div based on the mouse movement
      const newWidth = this.startWidth + e.clientX - this.startX;
      // set the state with the new width
      this.setState({ width: newWidth });
    }
  };

  handleMouseUp = (e) => {
    // handle mouse up on the document
    e.preventDefault();
    // set the dragging flag to false
    this.dragging = false;
  };

  handleResize = () => {
    // handle window resize event
    // get the current window width
    const windowWidth = window.innerWidth;
    // check if it is less than 600px and set isMobile accordingly
    if (windowWidth < 600) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  render() {
    const { component, code } = this.props;
    const { width, isMobile } = this.state;
    const highlightedCode = Prism.highlight(code, Prism.languages.js, 'jsx');

    // if the screen width is less than 600px, render a mobile layout
    if (isMobile) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', overflow: 'hidden', margin: '24px 0px',
          borderRadius: 20,
          boxSizing: "border-box",
          boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
          border: "solid 10px #d1d1d1",
        }}>
          <div
            style={{
              backgroundColor: '#d1d1d1',
              textAlign: "center",
              padding: 8,
            }}
            onMouseDown={this.handleMouseDown}
            children="CODE"
          />
          <div ref={this.codeRef} style={{ height: 500, overflowY: 'scroll', background: 'white', margin: 0, marginRight: -15, marginBottom: -10.5, }}>
            <pre>
              <code
                className="language-jsx"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </pre>
          </div>
          <div
            style={{
              padding: 8,
              backgroundColor: '#d1d1d1',
              textAlign: "center",
            }}
            children="COMPONENT"
          />
          <div style={{ flex: '1', position: 'relative', display: 'flex', zIndex: -1, minHeight: 500 }}>
            <div style={{ flex: '1', position: 'relative', zIndex: -1 }}>{component}</div>
          </div>
        </div>
      );
    }

    // otherwise, render a desktop layout
    return (
      <div style={{
        display: 'flex', overflow: 'hidden', borderRadius: 20, margin: "24px 0",
        boxSizing: "border-box",
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
        border: "solid 10px #d1d1d1",
      }}>
        <div ref={this.codeRef} style={{ width: `${width}px`, background: 'white', marginBottom: -15 }}>
          <pre>
            <code
              className="language-jsx"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>
        <div
          ref={this.resizerRef}
          style={{
            width: '10px',
            cursor: 'col-resize',
            backgroundColor: '#d1d1d1'
          }}
          onMouseDown={this.handleMouseDown}
          children={
            <div style={{ rotate: '90deg', display: "flex", alignItems: "center" }}>
              CODE
              <span style={{ fontSize: 15, paddingBottom: 1.5, paddingLeft: ".5em" }}>↕</span>
            </div>}
        />
        <div style={{ display: 'flex', flex: 1, position: 'relative', zIndex: -1 }}>
          <div style={{ flex: '1', position: 'relative', zIndex: -1 }}>{component}</div>
        </div>
        <div
          style={{
            width: '10px',
            cursor: 'col-resize',
            backgroundColor: '#d1d1d1'
          }}
          children={<div style={{ rotate: '90deg' }}>COMPONENT</div>}
        />
      </div>
    );
  }
}

export default ComponentRenderer;