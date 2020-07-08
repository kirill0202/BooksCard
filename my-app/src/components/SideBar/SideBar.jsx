import React, { useState } from 'react';
import Input from '../Input/Input';
import { useHistory } from 'react-router';
import './SideBar.scss';

const SideBar = () => {
    const [valueInput, setValueInput] = useState('');
    const history = useHistory();
    const url = new URL(window.location.href);

    const handlerInputValue = (event) => {
        setValueInput(event.target.value);
        const search = url.searchParams.set("search", `${event.target.value}`);
        history.replace(url.search.replace(search))
    }
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
                <li className="sidebar__item">
                    Цена(дешевые)
                </li>
                <li className="sidebar__item">
                    Автор
                </li> 
            </ul>
            <div className="sidebar__input">
                <Input placeholder={'search books'}
                    classnamestyle={'sidebar__search'}
                    value={valueInput}
                    onChange={handlerInputValue} />
            </div>
        </div>

    )
}
export default SideBar;
