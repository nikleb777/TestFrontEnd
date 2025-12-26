import "./ClubCard.css"

function ClubCard({club}) {
  return(
    <div className="club-card">
      <img src={club.logo} alt={club.name} />
      <h2>{club.name}</h2>
      <p>Основан: {club.founded}</p>
      <p>Титулы АПЛ: {club.titles}</p>
      <p>ЛЧ: {club.championsLeague}</p>
      <p>Стадион: {club.stadium}</p>
    </div>
  );
}

export default ClubCard;