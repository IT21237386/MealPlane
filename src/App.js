import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddWorkout from "./workouts/AddWorkout";
import EditWorkout from "./workouts/EditWorkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addworkout" element={<AddWorkout />} />
          <Route exact path="/editworkout/:id" element={<EditWorkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
