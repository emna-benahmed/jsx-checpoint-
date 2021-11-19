import './App.css';
import im from './Thinking-of-getting-a-cat (1).png'

function App() {
  return (
    <div className="App">
      < div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={im} alt="source" />
        <br />
        <img src="/domestic-cat_thumb_square.webp" alt="public" />
      </div>

      <video width={320} height={240} controls>
      <iframe width="683" height="384" src="https://www.youtube.com/embed/DXTTvAO88bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </video>
    </div>
  );
}

export default App;
