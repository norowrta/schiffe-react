import { useState } from "react";
import scss from "./battleships.module.scss";
import ships from "./ships.json";

let board;

function createBoard() {}

export default function Battleships() {
  createBoard();

  return (
    <section className={scss.battleships}>
      <div className="container">
        <div className={scss.battleshipsContent}>
          <h1 className={scss.battleships}> Schiffe versenken </h1>

          <div className={scss.battleshipsBoards}>
            <div className={scss.battleshipsPlayerBoard}>
              {ships.map((item) => {
                return (
                  <div key={item.id} className={scss.battleshipsCell}>
                    <span className={scss.battleshipsHeadline}>{item.txt}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
