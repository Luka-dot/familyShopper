import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addItem} from '../../redux/actions/index';

import './custom-button.styles.scss';

const CustomButton = () => {
    const dispatch = useDispatch();
    const [entry, setEntry] = useState('');

    const hadleChange = (e) => {
        const textInput = e.target.value;
        setEntry(textInput)
    }

    const handleEnter = () => {
        if (entry.length > 0) {
            dispatch(addItem(entry));
        setEntry('')
        } else {
            alert('must not be empty')
        }
    }

    return (
        <div className="button-container">
            <button 
                className="custom-button"
                onClick={() => handleEnter(entry)}
            >+</button>
            <form>
                <input placeholder="new item" onChange={(e) => hadleChange(e)}></input>
            </form>
        </div>
    )
};

export default CustomButton;