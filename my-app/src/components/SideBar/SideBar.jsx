import React from 'react';
import './SideBar.scss';

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__items">
                <li className="sidebar__item">
                    Все
                </li>
                <li className="sidebar__item">
                    Популярные
                </li>
                <li className="sidebar__item">
                    Цена(дорогие)
                </li>
                <li className="sidebar__item">
                    Цена(дешевые)
                </li>
                <li className="sidebar__item">
                    Автор
                </li>
            </ul>
            <div className="sidebar__input">
                <input type='text' placeholder='search books' className="sidebar__search"/>
            </div>
        </div>

    )
}
export default SideBar;
