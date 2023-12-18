import "./App.css";

function Image() {
  return <img src="sougata.jpeg" alt="sougata" className="profile-image" />;
}

function Name() {
  return <h2 className="profile-name">Sougata Das</h2>;
}

function Description() {
  return (
    <p className="profile-desc">
      Hi, myself sougata. I am a programming enthusiast. Loves to develope
      website and small tool to help me in my daily life.
    </p>
  );
}
function Skill(props) {
  const style = { backgroundColor: props.color };
  return (
    <li className="skill" style={style}>
      {props.skill} {props.emoji}
    </li>
  );
}
function Skillset() {
  return (
    <div>
      <ul className="skill-list">
        <Skill color="green" skill="React.js" emoji="💪" />
        <Skill color="red" skill="Node.js" emoji="👍" />
        <Skill color="pink" skill="Java Script" emoji="👍" />
        <Skill color="yellow" skill="Python" emoji="💪" />
        <Skill color="blue" skill="GIT & Github" emoji="💪" />
        <Skill color="purple" skill="PHP" emoji="👍" />
        <Skill color="brown" skill="Mysql" emoji="👍" />
      </ul>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Image />
      <Name />
      <Description />
      <Skillset />
    </div>
  );
}
function App() {
  return <Card />;
}

export default App;
