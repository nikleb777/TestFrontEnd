import type { Club } from "../../types/Club";
import "./ClubCard.css";

type Props = {
  club: Club;
};

export function ClubCard({club}: Props) {
  return(
    <div className="club-card">
      <h2>{club.name}</h2>
      <p>Основан: {club.founded}</p>
      <p>Титулы АПЛ: {club.titles}</p>
      <p>Стадион: {club.stadium}</p>
    </div>
  );
}