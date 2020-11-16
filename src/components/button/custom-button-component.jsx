import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
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
        console.log('submitting')
        if (entry.length > 0) {
            dispatch(addItem(entry));
        setEntry('')
        } else {
            alert('must not be empty')
        }
    }

    const handleKeyEnter = (e) => {
        e.preventDefault()
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
                type="submit"
                onClick={() => handleEnter(entry)}
            >+</button>
            <form onSubmit={(e) => handleKeyEnter(e)}>
                <input className="input-text" placeholder="new item" value={entry} onChange={(e) => hadleChange(e)}></input>
            </form>
        </div>
    )
};

export default CustomButton;