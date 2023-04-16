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
    const { component, code, height } = this.props;
    const { width, isMobile } = this.state;
    const highlightedCode = Prism.highlight(code, Prism.languages.js, 'jsx');
    const styles = {
      desktop: {
        container: {
          display: 'flex',
          overflow: 'hidden',
          borderRadius: 20,
          margin: "24px 0",
          boxSizing: "border-box",
          boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
          border: "solid 10px #d1d1d1",
          maxHeight: height ? height : 400,
        },
        code: {
          width: `${width}px`,
          background: 'white',
          marginBottom: -15,
          overflow: "auto"
        },
        resizer: {
          width: '15px',
          backgroundColor: '#d1d1d1',
          margin: 0,
          border: "none",
        },
        resizerText: {
          rotate: '90deg',
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        component: {
          display: 'flex',
          flex: 1,
          position: 'relative',
          zIndex: -1
        }
      },
      mobile: {
        wrapper: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          margin: '24px 0px',
          borderRadius: 20,
          boxSizing: 'border-box',
          boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
          border: 'solid 10px #d1d1d1',
          height: height ? height * 3 : 1000
        },
        label: {
          backgroundColor: '#d1d1d1',
          textAlign: 'center',
          padding: 8
        },
        code: {
          height: height ? height * 2.5 : 500,
          overflowY: 'scroll',
          background: 'white',
          margin: 0,
          marginBottom: -10.5
        },
        componentWrapper: {
          flex: '1',
          position: 'relative',
          display: 'flex',
          zIndex: -1,
          minHeight: height ? height : 500
        },
        component: {
          flex: '1',
          position: 'relative',
          zIndex: -1
        }
      }
    };

    // if the screen width is less than 600px, render a mobile layout
    if (isMobile) {
      return (
        <div style={styles.mobile.wrapper}>
          <div style={styles.mobile.label} children="COMPONENT" />
          <div style={styles.mobile.componentWrapper}>
            <div style={styles.mobile.component}>{component}</div>
          </div>

          <div style={styles.mobile.label} children="CODE" />
          <div ref={this.codeRef} style={styles.mobile.code}>
            <pre>
              <code
                className="language-jsx"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </pre>
          </div>
        </div>
      );
    }

    // otherwise, render a desktop layout
    return (
      <div style={styles.desktop.container}>
        <div ref={this.codeRef} style={styles.desktop.code}>
          <pre>
            <code
              className="language-jsx"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>
        <button
          ref={this.resizerRef}
          style={{ ...styles.desktop.resizer, cursor: 'col-resize' }}
          onMouseDown={this.handleMouseDown}
        >
          <div style={styles.desktop.resizerText}>
            CODE
            <span style={{ fontSize: 15, paddingBottom: 1.5, paddingLeft: ".5em" }}>↕</span>
          </div>
        </button>
        <div style={styles.desktop.component}>
          <div style={{ flex: '1', position: 'relative', zIndex: -1 }}>{component}</div>
        </div>
        <button
          ref={this.resizerRef}
          style={{ ...styles.desktop.resizer, cursor: 'default' }}
        >
          <div style={styles.desktop.resizerText}>COMPONENT</div>
        </button>
      </div>
    );
  }
}

export default ComponentRenderer;