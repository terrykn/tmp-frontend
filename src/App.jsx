import './App.css';
import GeneratePlaylist from './components/GeneratePlaylist';
import TravelInput from './components/TravelInput';


function App() {
  return (
    <>
      {/* Header */}
      <div className="Header">
        <h1>Travel Music Planner</h1>
      </div>

      {/* Traveling */}
      <div className="App">
        <TravelInput />
      </div>

      {/* Generate Spotify Playlist */}
      <div className="App">
        <GeneratePlaylist />
      </div>

      {/* Footer */}
      <div className="Footer">
        
      </div>
    </>
  );
}

export default App;