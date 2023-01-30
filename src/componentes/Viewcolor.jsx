import React from "react";

export default function Viewcolor(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        {props.colores.length > 0 ? (
          props.colores.map((elem) => (
            <div className="col" key={elem.id}>
              <article
                className="mt-4"
                style={{
                  width: "100px",
                  height: "100px",
                  background: elem.color,
                }}
              ></article>
            </div>
          ))
        ) : (
          <span className="lead">No hay elementos</span>
        )}
      </div>
    </div>
  );
}
