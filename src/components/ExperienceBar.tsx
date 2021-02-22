import './styles.css';

export function ExperienceBar() {
  return (
    <header className="experienceBar">
      <span>0 xp</span>
      <div>
        <div className="progressBar" style={{width: "50%"}} />
        <span className="currentXp" style={{left: "50%"}} >300 xp</span>

      </div>
      <span>600 xp</span>
    </header>
  );
}
