import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h3 className="text-center">
        <span className="badge badge-secondary bg-info">LISTA DE TAREAS</span>
      </h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese tarea"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Guardar
          </button>
        </div>
      </div>
      <div className="jumbotron">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <span className="form-control">Dapibus ac facilisis in</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <span className="form-control">Dapibus ac facilisis in</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <span className="form-control">Dapibus ac facilisis in</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <span className="form-control">Dapibus ac facilisis in</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <span className="form-control">Dapibus ac facilisis in</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
