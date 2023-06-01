import { AppContext } from "../../context/app.context";
import style from "./controls.module.scss";
import { useContext } from "react";

export function Controls() {
  const {
    digimonContext: { setCurrentPage, currentPage },
  } = useContext(AppContext);

  const handleNextPage = () =>
    currentPage < 70 ? setCurrentPage(currentPage + 1) : 70;

  const handlePreviousPage = () =>
    currentPage > 0 ? setCurrentPage(currentPage - 1) : 0;

  return (
    <>
      <section className={style.controls}>
        <button
          className={currentPage === 0 ? style.disabled : style.active}
          onClick={handlePreviousPage}
        >
          ⬅
        </button>
        <a href="#header">GO BACK UP</a>
        <button
          className={currentPage === 70 ? style.disabled : style.active}
          onClick={handleNextPage}
        >
          ➡
        </button>
      </section>
    </>
  );
}
