import { clubsData } from "./clubsData";
import ClubCard from "./ClubCard";
import "./ClubsList.css";

function ClubsList() {
  return (
    <div className="clubs-list">
      <h1>История клубов АПЛ</h1>

      <div className="clubs-grid">
        {clubsData.map(club => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
}

export default ClubsList;
