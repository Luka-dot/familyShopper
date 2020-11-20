    import React from 'react';
    import { connect } from 'react-redux';
    import { Link } from 'react-router-dom';
 
    import {deleteDirectoryList} from '../../redux/actions/index';

    import './directory-component.styles.scss';
    import deleteIcon from '../../assets/delete.svg';

    const DirectoryList = (props) => {

        const handleDeleteDirList = (directoryListId) => {
            // const elementsIndex = props.mainList.findIndex(element => element.id === id )
            // const selectedList = props.mainList[elementsIndex].listDetail;
            console.log('del dir list ', directoryListId)
            props.deleteDirectory(directoryListId);
        }

        return (
            <div className="directory-wrapper">
                {
                    props.mainList.map((props) => (
                        <div key={props.id} className="directory-card"  >
                            <div className="delete-container">
                                <img className="delete-icon" src={deleteIcon} onClick={() => handleDeleteDirList(props.id)} />
                            </div>
                            <Link to={{pathname:"/mainList/:id", selectedItemId: props.id }} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                            <h2>{props.name}</h2>
                            <p>Created : {props.created}</p>
                            <p>{props.listDetail.length} items on this list.</p>
                            </Link>
                        </div>
                    ))
                }

            </div>
        )
    };

const mapStateToProps = (state) => ({
    mainList: state.mainList
})

const mapDispatchToProps = dispatch => ({
    deleteDirectory: directoryListId => dispatch(deleteDirectoryList(directoryListId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectoryList);