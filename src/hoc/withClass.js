import React, { Component } from 'react';

//instead of creating a functinonal component, this creates a function that takes in the component that is to be wrapped
//and the various classnames that will be passed down through it.
//You simply export any component you wished to have wrapped like so:
// ++ withClass(ComponentName, classes.ComponentName); ++
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

//Can also be used as a stateful component wrapper if needed:
const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      )
    }
  }
  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />
  })
};

export default withClass;