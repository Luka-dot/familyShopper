import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import DirectiryList from '../../components/directory/directory-componenet';
import { addNewDirectoryList, getMainList } from '../../redux/actions';

import './home-page.styles.scss';
import closeIcon from '../../assets/delete-button.svg';

const HomePage = (props) => {
    const inputRef = useRef();
    const [addListStarted, setAddListStarted] = useState(false);
    const [name, setName] = useState('');


    useEffect(
        () => {
          // This runs AFTER the first render,
          // so the ref is set by now.
          console.log("render");
          // inputRef.current.focus();
        },
            // The effect "depends on" inputRef
        [inputRef]
      );


    // useEffect(() => {
    //     () => {
        
    //     handleConnect();
    // }
    // }, [inputRef])

    const handleNameChange = (e) => {
        const nameInput = e.target.value;
        setName(nameInput);
    };

    const handleConnect = () => {
        console.log('Connecting .......');
        props.getMainList();
    }

    const handleAddDirectory = () => {
        console.log('clicked added handleAddDirectory', name)
        if ( name.length > 1 ) {
            props.addNewDirectoryList(name);
            setName('');
            setAddListStarted(false);
        } else {
            alert('Name can not be left empty')
        }
    }

    return (
        <div>
            { !addListStarted ? (
            <div className='home-wrapper' >
                <div className="home-main-container" >
                    <DirectiryList />
                </div>
                <button className="addListButton" onClick={() => setAddListStarted(true)} >ADD new list</button>
                <button className="enterNewDir" onClick={() => handleConnect()}>Refresh</button>
            </div>
            ):(
            <div className='home-wrapper' >
                <div className="new-directory-wrapper">
                    <img src={closeIcon} className="cancel-new-directory-list" onClick={() => setAddListStarted(false)}></img>
                </div>
                    <form className="directory-form">
                        <input type="text" placeholder="Name of the new List" onChange={(e) => handleNameChange(e) } />
                    </form>
                    <button className="enterNewDir" type="submit" onClick={handleAddDirectory}>ADD new list</button>
                    
            </div>
            )
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addNewDirectoryList: (name) => dispatch(addNewDirectoryList(name)),
    getMainList: () => dispatch(getMainList())
});

export default connect(null, mapDispatchToProps)(HomePage);