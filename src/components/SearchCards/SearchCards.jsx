import stylesSC from "./SearchCards.module.scss";
import { filterAttrButtons, filterCompButtons } from "./dataFilter";
import  search  from "../../img/search.svg";
import PropTypes from 'prop-types';
import { memo } from "react";

 function SearchCards({
  bindValue,
  handleClickFilter,
  currentFilterAttr,
  currentFilterComp,
}) {
  return (
    <div className={stylesSC["search-box"]}>
      <span className={stylesSC["search-box__name"]}>FILTER HEROES</span>
      <div className={stylesSC["wrapper-filter"]}>
        <span className={stylesSC["name-filter"]}>ATTRIBUTE</span>
        <ul className={stylesSC["attributes-filter-list"]}>
          {filterAttrButtons.map(({ id, type }) => (
            <li key={id} data-id={id} className={stylesSC["attribute-item"]}>
              <button  type="button"
                className={`${stylesSC["attribute-filter"]} ${
                  currentFilterAttr === id ? stylesSC["active"] : ""
                } ${stylesSC[type]}`}
                onClick={() => handleClickFilter(id, "attr")}
              ></button>
            </li>
          ))}
        </ul>
      </div>

      <div className={stylesSC["wrapper-filter"]}>
        <span className={stylesSC["name-filter"]}>COMPLEXITY</span>
        <ul className={stylesSC["list-complexity-filter"]}>
          {filterCompButtons.map(({ id, type }) => (
            <li key={id} data-id={id} className="item-complexity">
              <button type="button"
                className={`${stylesSC[type]} ${
                  currentFilterComp >= id ? stylesSC["active-complexity"] : ""
                }`}
                onClick={() => handleClickFilter(id, "comp")}
              ></button>
            </li>
          ))}
        </ul>
      </div>

      <div className={stylesSC["wrapper-search-form"]}>
        <img className={stylesSC["search-picture"]} src={search} width="26" height="26" alt="picture of search" />
        <form id="search-form" action="" className={stylesSC["search-form"]}>
          <label htmlFor="search"></label>
          <input
            className={stylesSC["search-form__input"]}
            id="search"
            type="text"
            autoComplete="off"
            onChange={(event) => bindValue(event)}
          />
        </form>
      </div>
    </div>
  );
}


SearchCards.propTypes= {
  bindValue: PropTypes.func.isRequired,
  handleClickFilter: PropTypes.func.isRequired,
  currentFilterAttr: PropTypes.number,
  currentFilterComp: PropTypes.number,
}

 const SearchCardsMemo = memo (SearchCards)

 export default SearchCardsMemo
