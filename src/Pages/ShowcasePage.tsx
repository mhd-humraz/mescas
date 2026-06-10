import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ShowcasePage.css";

const initialProjects = [
  {
    id: 1,
    name: "Humraz",
    dept: "BCA",
    title: "Poster Design Collection",
    desc: "Creative posters made using Canva",
    image: "/src/assets/images/code.png",
    link: "#",
    category: "Design",
  },
];

const categories = ["All", "Design", "Media", "Development"];

export default function Showcase() {
  const [projects, setProjects] = useState(initialProjects);
  const [active, setActive] = useState("All");
  const [showForm, setShowForm] = useState(false);
 

  // 📤 Form
  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
    otherDept: "",
    title: "",
    desc: "",
    image: "",
    link: "",
    category: "Design",
  });

 

 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          department: form.dept,
          title: form.title,
          category: form.category,
          link: form.link,
          image: form.image,
          description: form.desc,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert(`✅ Project Submitted

        Thank you for your submission.
        The µLearn MESCAS team will review your project before publishing.`);

      setForm({
        name: "",
        email: "",
        dept: "",
        otherDept: "",
        title: "",
        desc: "",
        image: "",
        link: "",
        category: "Design",
      });

      setShowForm(false);
    } catch (error) {
      console.error(error);
      alert("  Failed to submit project. Please try again.");
    }
  };

  // 🔎 Filter
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="showcase">
      <h1 className="title">Showcase</h1>
      <p className="subtitle">Proof of skills, not just marks</p>

      {/* TOP BAR */}
      <div className="topBar">
        <button className="addBtn" onClick={() => setShowForm(true)}>
          + Add Project
        </button>
      </div>

      {/* FILTER */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "activeFilter" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="modalOverlay">
          <div className="modal">
            <h2> Showcase your Project</h2>

              <p style={{ marginBottom: "15px", color: "#666" }}>
                Submit your project for review. Approved projects will be featured in the µLearn MESCAS Showcase.
              </p>

            <form onSubmit={handleSubmit}>
              <input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />

              <select
                  value={form.dept}
                  onChange={(e) =>
                    setForm({ ...form, dept: e.target.value })
                  }
                  required
                >
                  <option value="">Select Department</option>
                  <option value="BCA">BCA</option>
                  <option value="BSc Computer Science">BSc Computer Science</option>
                  <option value="BCom">BCom</option>
                  <option value="MCA">MCA</option>
                  <option value="Other">Other</option>
                </select>
                {form.dept === "Other" && (
                <input
                  placeholder="Enter Department Name"
                  value={form.otherDept || ""}
                  onChange={(e) =>
                    setForm({ ...form, otherDept: e.target.value })
                  }
                  required
                />
              )}

              <input
                placeholder="Project Title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                required
              />

              <textarea
                placeholder="Describe your project..."
                value={form.desc}
                onChange={(e) =>
                  setForm({ ...form, desc: e.target.value })
                }
                rows={4}
                required
              />

              <input
                type="url"
                placeholder="Project Link"
                value={form.link}
                onChange={(e) =>
                  setForm({ ...form, link: e.target.value })
                }
                required
              />

              <input
                type="url"
                placeholder="Image URL (Optional)"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              >
                <option>Design</option>
                <option>Media</option>
                <option>Development</option>
              </select>

              <div className="modalActions">
                <button
                  type="button"
                  className="cancelBtn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                
                <button className="addBtn" onClick={() => setShowForm(true)}>
                    Submit Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CARDS */}
      <div className="cardContainer">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <span className="badge">{item.category}</span>

            <div className="imageWrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="cardContent">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="meta">
                <span>{item.name}</span>
                <span className="deptBadge">{item.dept}</span>
              </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectLink"
                >
                  View Project →
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}