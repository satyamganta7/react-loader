import { Component } from "reactr";
const RichLoader = (WrappedComponent) => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} className="animated" />;
    }
  };
};
