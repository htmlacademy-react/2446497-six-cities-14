import { useState } from 'react';
import { Sorting } from '../../types/sorting';
import { SortTypesSetting } from '../../const';

type SortProps = {
  activeSorting: Sorting;
  changeSort: (type: Sorting) => void;
};

export default function Sort({ activeSorting, changeSort }: SortProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  function handleTypeClick() {
    setIsOpened((prev) => !prev);
  }
  function handleSortingItemClick(type: Sorting) {
    changeSort(type);
    setIsOpened(false);
  }
  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0} onClick={handleTypeClick}>
        {SortTypesSetting[activeSorting]}
        <svg className='places__sorting-arrow' style={{ width: '7', height: '4', transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}` }}>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {(Object.entries(SortTypesSetting) as [Sorting, (typeof SortTypesSetting)[Sorting]][]).map(([type, label]) => (
          <li key={type} onClick={() => handleSortingItemClick(type)} className={`places__option ${type === activeSorting ? 'places__option--active' : ''}`} tabIndex={0}>
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
