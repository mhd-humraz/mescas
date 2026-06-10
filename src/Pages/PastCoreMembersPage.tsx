import { useState } from "react";
import styles from "./PastCoreMembersPage.module.css";

const pastCoreMembers = [
  {
    name: "Muhammed Humraz H",
    role: "Campus Lead",
    academicYear: "2025-26",
    imageUrl: "https://i.postimg.cc/sDT3SFQ7/humraz.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com/mhd-humraz",
  },
  {
    name: "Riswana",
    role: "Secretary",
    academicYear: "2025-26",
    imageUrl: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com",
  },
];

const PastCoreMembersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredMembers = pastCoreMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear =
      selectedYear === "All" || member.academicYear === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className={styles.pastCoreMembersPage}>
      <div className={styles.pageHeader}>
        <h1>Past Core Members</h1>
        <p>
          Honoring the leaders and contributors who helped build and grow the
          MuLearn community at MESCAS.
        </p>
      </div>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="🔍 Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className={styles.yearSelect}
        >
          <option value="All">All Years</option>
          <option value="2025-26">2025-26</option>
          <option value="2024-25">2024-25</option>
        </select>
      </div>

      <div className={styles.membersGrid}>
        {filteredMembers.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <img
              src={member.imageUrl}
              alt={member.name}
              className={styles.memberImage}
            />

            <h3 className={styles.memberName}>{member.name}</h3>

            <p className={styles.memberRole}>{member.role}</p>

            <p className={styles.memberYear}>
              Academic Year: {member.academicYear}
            </p>

            <div className={styles.socialLinks}>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}

              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastCoreMembersPage;