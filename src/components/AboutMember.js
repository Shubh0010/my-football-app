const AboutMember = ({ name, location, email }) => {
  return (
    <div className="aboutmember-card">
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>{email}</h3>
    </div>
  )
}

export default AboutMember