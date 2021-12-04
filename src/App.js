import './App.css';
import NavigationBar from './components/nav-bar/NavigationBar'
import NavigationButton from './components/nav-button/NavigationButton'

function App() {
  return (
    <div>
      <div className="header">
        Spark's Minecraft Site
      </div>

      <NavigationBar>
        <NavigationButton>Home</NavigationButton>
        <NavigationButton>Crafting</NavigationButton>
        <NavigationButton>Idea 2</NavigationButton>
      </NavigationBar>
    </div>
  );
}

export default App;
