    import React from 'react';
    import { connect } from 'react-redux';
 
    import './directory-component.styles.scss';

    const DirectoryList = (props) => {
        console.log(props.mainList);
        return (
            <div className="directory-wrapper">
                {
                    props.mainList.map((props) => (
                        <div className="directory-card">
                            <h2>{props.name}</h2>
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