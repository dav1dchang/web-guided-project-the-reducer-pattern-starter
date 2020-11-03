import React from 'react';
import { connect } from 'react-redux';
import { addMember } from '../actions/dragonListActions';

class DragonList extends React.Component {
  state = {
    newMember: '',
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h2>{this.props.headerFromRedux}</h2>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index} onClick={() => this.props.toggleStatus(index)}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick ={() => this.props.addMember(this.state.newMember)}>Add member</button>
      </React.Fragment>
    );
  }
}

// STEP 2: use connect to allow your component to read data from the Redux store
// call connect twice, and pass the component into the second invocation
// the first invocation takes in 2 arguments: a function and an object

// the function passed into connect (Usually called mapStateToProps)
// - when redux calls this function , it will pass in the entire state object from the store
// - return an object. Every property on the returned will be added to the props of the connected component

const mapStateToProps = (state) => {
  return {
    members: state.members,
    headerFromRedux: state.header
  }
}

export default connect(mapStateToProps, { addMember })(DragonList); // function currying

// Inside the sneaky connect function:
// mapStateToProps(store.getState())

// connect handles dispatch for us
// store.dispatch({ type: 'ADD_NEW_MEMBER', payload: newMemberName })
