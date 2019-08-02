import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello/Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };

    
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' }
    }).then(stream => {
      console.info(stream,this.fullBleedVideo.current);
      this.fullBleedVideo.current.srcObject = stream;
    });
  }
  private fullBleedVideo = React.createRef<HTMLVideoElement>();

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <video 
        ref={this.fullBleedVideo}
        autoPlay
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
