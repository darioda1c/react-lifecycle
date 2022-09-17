import React from 'react';
// function App() {
//   return (
//     <div>
//       <h1>Lets' start!</h1>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    console.log('Constructor')
    super();

    this.state = {
      count: 0
    }
    this.incrementCount = () => { this.setState({ count: this.state.count + 1 })};
    this.decrementCount = () => { this.setState({ count: this.state.count - 1 })};
  }

  componentDidMount() {
    console.log('Did Mount');
    console.log('---------');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Did Update');
  }

  render() {
    console.log('Render');

    return(
      <div>
        <h1>Hello, there!</h1>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    )
  }
}

export default App;
