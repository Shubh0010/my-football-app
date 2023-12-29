import AboutMember from "./AboutMember";
import AboutMemberClass from "./AboutMemberClass";

const About = () => {
  return (
    <div className="bg-green-100 pb-96">
      <h1 className="ml-10 pt-5">This is Namaste Football, I am Learning React</h1>
      <AboutMember name="Shubham" location="kotdwara" email="shubhamnegi0010@gmail.com"/>
      <AboutMemberClass name="rasmus" location="denmark" email="rasmus@gmail.com"/>
    </div>
  );
}

export default About;