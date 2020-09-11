import React from "react";
import {Link} from "react-router-dom";
import {vocabulary as v} from "./MainLayot.lang";
import css from "./MainLayout.module.scss"
import {useDispatch, useSelector} from "react-redux";

const MainLayout = ({children}) => {
  const lg = useSelector(state => state.language);
  const dispatch = useDispatch();
  const {pointer, wrap, center} = css;

  const clickHandler = ({target: { textContent }}) => {
    dispatch({type: textContent});
  }

  return (
      <div className={wrap}>
        <nav className={"navbar navbar-dark bg-dark"}>
          <Link className={"navbar-brand"} to="/">
            {v[lg].pageTitle}
          </Link>

          <div>
          <span
            className={`badge badge-${lg === "ru" ? "primary" : "secondary"} ${pointer}`}
            data-testid={"ru"}
            onClick={clickHandler}
          >
            {"RU"}
          </span>

            <span
              className={`badge badge-${lg === "eng" ? "primary" : "secondary"} ${pointer}`}
              data-testid={"eng"}
              onClick={clickHandler}
            >
            {"ENG"}
          </span>
          </div>
        </nav>

        <div className={center}>
          {children}
        </div>
      </div>
  )
}

export {MainLayout};
