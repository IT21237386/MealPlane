import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    const result = await axios.get("http://localhost:8080/meal");
    setWorkouts(result.data);
  };

  const deleteWorkout = async (id) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      await axios.delete(`http://localhost:8080/meal/${id}`);
      loadWorkouts();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Day</th>
              <th scope="col">Time</th>
              <th scope="col">Meal 01</th>
              <th scope="col">Meal 02</th>
              <th scope="col">Meal 03</th>
              <th scope="col">Meal 04</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, index) => {
              const date = new Date(workout.createdAt);
              const formattedDate = date.toLocaleDateString();

              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{workout.distanceRun}</td>
                  <td>{workout.noOfPushups}</td>
                  <td>{workout.weightLifted}</td>
                  <td>{formattedDate}</td>
                  <td>
                    <Link
                      to={`/editworkout/${workout.id}`}
                      className="btn btn-outline-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={() => deleteWorkout(workout.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
