import React from 'react';

//class based component

class AboutMemberClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      memberInfo: {
        name: 'Rasmus',
        location: 'Denmark',
        email: 'rasmus@gmail.com'
      }
    }
  }

  async componentDidMount() {

    const data = await fetch('https://api.github.com/users/shubh0010');
    const json = await data.json();

    this.setState({
      memberInfo: {
        name: json.name,
        location: json.type,
        email: json.login
      }
    })
  }

  render() {

    const {name, location, email} = this.props;

    return (
      <div className="m-10">
        <h2>{this.state.memberInfo.name}</h2>
        <h3>{this.state.memberInfo.location}</h3>
        <h3>{this.state.memberInfo.email}</h3>
      </div>
    )
  }
}

export default AboutMemberClass;