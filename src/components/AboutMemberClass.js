import React from 'react';

//class based component

class AboutMemberClass extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {name, location, email} = this.props;

    return (
      <div className="aboutmember-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h3>{email}</h3>
      </div>
    )
  }
}

export default AboutMemberClass;