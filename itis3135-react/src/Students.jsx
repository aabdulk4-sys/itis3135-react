import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1";

  useEffect(() => {
    async function fetchStudents() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading student data:", error);
        setLoading(false);
      }
    }
    fetchStudents();
  }, []);

  return (
    <>
      <Header />
      <title>ITIS3135 | Ayah Abdulkareem's | Ambitious Antelope | Students</title>
      <main className="students-page" style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
        <h1>ITIS 3135 – Student Introductions</h1>

        {loading ? (
          <p>Loading student data...</p>
        ) : (
          students.map((s) => (
            <div
              key={s.prefix}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
                background: "#fafafa"
              }}
            >
              <h2>
                {s.name.first} {s.name.middleInitial} {s.name.last}
                {s.name.preferred && <span> ({s.name.preferred})</span>}
              </h2>

              
              <p><strong>Acknowledgement:</strong> {s.acknowledgement}</p>
              <p><strong>Acknowledged On:</strong> {s.acknowledgementDate}</p>

              

              {/* IMAGE */}
              {s.media?.hasImage && (
                <div style={{ margin: "15px 0" }}>
                  <img
                    src={`https://dvonb.xyz${s.media.src}`}
                    alt={s.media.caption}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <p style={{ fontSize: "0.9rem", color: "#555" }}>
                    {s.media.caption}
                  </p>
                </div>
              )}

              <h3>Background</h3>
              <p><strong>Personal:</strong> {s.backgrounds.personal}</p>
              <p><strong>Professional:</strong> {s.backgrounds.professional}</p>
              <p><strong>Academic:</strong> {s.backgrounds.academic}</p>
              {s.backgrounds.subject && (
                <p><strong>Subject Background:</strong> {s.backgrounds.subject}</p>
              )}

                <p><strong>Mascot:</strong> {s.mascot}</p>
                <p><strong>Device:</strong> {s.platform.device}</p>
                <p><strong>OS:</strong> {s.platform.os}</p>

              <h3>Courses</h3>
              <ul>
                {s.courses.map((course, i) => (
                  <li key={i}>
                    <strong>{course.code}</strong> – {course.name} - <em>{course.reason}</em>
                  </li>
                ))}
              </ul>

              <h3>Personal Statement</h3>
              <p>{s.personalStatement}</p>

              <h3>Quote</h3>
              <blockquote style={{ fontStyle: "italic", marginLeft: "20px" }}>
                “{s.quote.text}”
                <br />— <strong>{s.quote.author}</strong>
              </blockquote>

              <p><strong>Fun Fact:</strong> {s.funFact}</p>

              {s.additional && (
                <p><strong>Additional Info:</strong> {s.additional}</p>
              )}

              <h3>Links</h3>
              <ul>
                {Object.entries(s.links).map(([label, url], i) => (
                  <li key={i}>
                    <a href={url} target="_blank" rel="noreferrer">
                      {label.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </main>

      <Footer />
    </>
  );
}
