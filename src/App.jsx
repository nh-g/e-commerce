import Navigation from "./shared/Navigation";
import HomePage from "./pages/homepage/Home";
import './styles/style.sass'
export default function App() {
  return (
    <div className="App">
      {/* Header */}
      <Navigation/>
      {/* Home */}
      <HomePage/>
    </div>
    
  );
}
