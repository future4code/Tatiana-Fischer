import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'caio'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/158'}
        />

          <Post
          nomeUsuario={'amanda'}
          fotoUsuario={'https://picsum.photos/50/58'}
          fotoPost={'https://picsum.photos/200/155'}
        />

      </div>
    );
  }
}

export default App;
