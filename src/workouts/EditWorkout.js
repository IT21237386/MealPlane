import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditWorkout() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [workout, setWorkout] = useState({
    distanceRun: "",
    noOfPushups: "",
    weightLifted: "",
  });

  const { distanceRun, noOfPushups, weightLifted } = workout;

  const onInputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadWorkout();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault(); // to prevent showing submitted data in the url
    await axios.put(`http://localhost:8080/workout/${id}`, workout);
    toast.success("Workout updated successfully!");
    navigate("/");
  };

  const loadWorkout = async () => {
    const result = await axios.get(`http://localhost:8080/workout/${id}`);
    setWorkout(result.data);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Workout</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
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
              <label htmlFor="Username" className="form-label">
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
              <label htmlFor="Email" className="form-label">
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
