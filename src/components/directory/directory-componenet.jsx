    import React from 'react';
    import { connect } from 'react-redux';
 
    import './directory-component.styles.scss';

    const DirectoryList = (props) => {
        console.log(props.mainList);

        const handleSelectList = (id) => {
            const elementsIndex = props.mainList.findIndex(element => element.id === id )
            console.log(elementsIndex);
            const selectedList = props.mainList[elementsIndex].listDetail;
            console.log(selectedList)
        }

        return (
            <div className="directory-wrapper">
                {
                    props.mainList.map((props) => (
                        <div className="directory-card" onClick={() => handleSelectList(props.id)}>
                            <h2>{props.name}</h2>
                            <p>Created : {props.created}</p>
                            <p>{props.listDetail.length} items on this list.</p>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(DirectoryList);