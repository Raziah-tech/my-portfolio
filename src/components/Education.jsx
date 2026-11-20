
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Gandhi Engineering College, Bhubaneswar",
    year: "2025 – 2027",
    score: "CGPA: 7.91",
    status: "Currently Pursuing"
  },
  {
    degree: "B.Sc. Information Technology Management",
    college: "Utkal University",
    year: "2025",
    score: "CGPA: 7.53",
    status: "Completed"
  },
  {
    degree: "Higher Secondary Education (CHSE)",
    college: "Nayagarh Prajamandal Mahila H.S. School",
    year: "2022",
    score: "55.17%",
    status: "Completed"
  },
  {
    degree: "Secondary Education (BSE)",
    college: "Govt. Girls High School, Nayagarh",
    year: "2020",
    score: "68.5%",
    status: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <span>MY ACADEMIC BACKGROUND</span>
        <h2>My <span className="gradient-text">Education</span></h2>
      </div>

      <div className="education-list">
        {education.map((item, index) => (
          <motion.div
            className="education-card"
            key={item.degree}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="education-icon">
              <GraduationCap size={26} />
            </div>

            <div className="education-info">
              <span className="education-year">{item.year}</span>
              <h3>{item.degree}</h3>
              <p>{item.college}</p>
              <div className="education-bottom">
                <strong>{item.score}</strong>
                <span>{item.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
