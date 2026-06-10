 
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
];

const PastCoreMembersPage = () => {
  return (
    <div className={styles.pastCoreMembersPage}>
      <div className={styles.pageHeader}>
        <h1>Past Core Members</h1>
        <p>
          Honoring the leaders and contributors who helped build and grow the
          MuLearn community at MESCAS.
        </p>
      </div>

      <div className={styles.membersGrid}>
        {pastCoreMembers.map((member, index) => (
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