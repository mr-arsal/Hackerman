// import logo from './logo.svg';
import './App.css';

function App() {
  const hackerman = () => {
    setTimeout(() => {
      document.getElementById('no1').innerHTML = 'Initializing Network'
    }, 2000);
    setTimeout(() => {
      document.getElementById('no2').innerHTML = 'Connecting to service...'
    }, 4000);
    setTimeout(() => {
      document.getElementById('no3').innerHTML = 'Retreiving username...'
    }, 6000);
    setTimeout(() => {
      document.getElementById('no4').innerHTML = 'Username found....'
    }, 8000);
    setTimeout(() => {
      document.getElementById('no5').innerHTML = 'Trying a combination of 4.5 Trillion passwords...'
    }, 10000);
    setTimeout(() => {
      document.getElementById('no6').innerHTML = 'Password found...'
    }, 12000);
    setTimeout(() => {
      document.getElementById('no7').innerHTML = 'Connecting to Facebook...'
    }, 14000);
    setTimeout(() => {
      document.getElementById('newline').innerHTML = 'Successfully unlocked the Messenger...'
    }, 15000);
    setInterval(() => {
      document.getElementById('no8').innerHTML = 'ACCOUNT HACKED!!!'
      setInterval(() => {
        document.querySelector("#no8").classList.toggle('color')
      }, 200);
    }, 16000);

  }
  hackerman()
  return (
    <body className="bg-black">
      <div class="container text">
        <div id="no1">
        </div>
        <div id="no2" class="pt-3">
        </div>
        <div id="no3" class="pt-3">
        </div>
        <div id="no4" class="pt-3">
        </div>
        <div id="no5" class="pt-3">
        </div>
        <div id="no6" class="pt-3">
        </div>
        <div id="no7" class="pt-3">
        </div>
        <div id="newline" className="pt-3">
        </div>
        <div id="no8" class="pt-4 blink">
        </div>
      </div>
    </body>
  );
}

export default App;
