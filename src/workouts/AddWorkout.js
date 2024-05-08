import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddWorkout() {
  let navigate = useNavigate();

  const [workout, setWorkout] = useState({
    distanceRun: "",
    noOfPushups: "",
    weightLifted: "",
  });

  const { distanceRun, noOfPushups, weightLifted } = workout;

  const onInputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // to prevent showing submitted data in the url
    await axios.post("http://localhost:8080/workout", workout);
    toast.success("Workout added successfully!");
    navigate("/");
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">New Workout</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Distance Run" className="form-label">
                Distance Run
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the distance you run (in km)"
                name="distanceRun"
                value={distanceRun}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Push-up Count" className="form-label">
                Push-up Count
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter no. of push-ups"
                name="noOfPushups"
                value={noOfPushups}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Weight Lifted" className="form-label">
                Weight Lifted
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter weight you lifted (in kg)"
                name="weightLifted"
                value={weightLifted}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link
              type="submit"
              className="btn btn-outline-danger mx-2"
              to={"/"}
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
