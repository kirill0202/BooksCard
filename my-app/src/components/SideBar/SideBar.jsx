import React, { useState } from 'react';
import Input from '../Input/Input';

import { useHistory } from 'react-router';
import './SideBar.scss';
import { useDispatch } from 'react-redux';
import { actionFilterBooks } from '../../store/actions/actionBooks/actionFilterBooks';

const SideBar = () => {
    const [valueInput, setValueInput] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const url = new URL(window.location.href);
    
    const allHandleSort = () => {
        const name = 'all';
        dispatch(actionFilterBooks(name))
    }
    const cheapHandleSort = () => {
        const name = 'cheap';
        dispatch(actionFilterBooks(name))
    }
    const authorHandleSort = () => {
        const name = 'author';
        dispatch(actionFilterBooks(name))
    }
    const expensiveHandleSort = () => {
        const name = 'expensive';
        dispatch((actionFilterBooks(name)))
    }
    const handleInputValue = (event) => {
        setValueInput(event.target.value);
        const search = url.searchParams.set("search", `${event.target.value}`);
        history.replace(url.search.replace(search))
    }
   
    return (
        <div className="sidebar">
            <ul className="sidebar__items">
                <li className="sidebar__item" name="all" onClick ={allHandleSort}>
                    Все
                </li>
                <li className="sidebar__item" onClick={expensiveHandleSort}>
                    Цена(дорогие)
                </li>
                <li className="sidebar__item" onClick={cheapHandleSort}>
                    Цена(дешевые)
                </li>
                <li className="sidebar__item" onClick={authorHandleSort}>
                    Автор
                </li>
            </ul>
            <div className="sidebar__input">
                <Input placeholder={'search books'}
                    classnamestyle={'sidebar__search'}
                    value={valueInput}
                    onChange={handleInputValue} />
            </div>
        </div>

    )
}
export default React.memo(SideBar);
