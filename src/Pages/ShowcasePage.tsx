import { useState, useEffect } from "react";
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

  // ❤️ Likes
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  // 📤 Form
  const [form, setForm] = useState({
    name: "",
    dept: "",
    title: "",
    desc: "",
    image: "",
    link: "",
    category: "Design",
  });

  // Load likes
  useEffect(() => {
    const saved = localStorage.getItem("likes");
    if (saved) setLikes(JSON.parse(saved));
  }, []);

  // Save likes
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const handleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      ...form,
    };

    setProjects((prev) => [newProject, ...prev]);

    setForm({
      name: "",
      dept: "",
      title: "",
      desc: "",
      image: "",
      link: "",
      category: "Design",
    });

    setShowForm(false);
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
            <h2>Add Project</h2>

            <form onSubmit={handleSubmit}>
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />

              <input
                placeholder="Department"
                value={form.dept}
                onChange={(e) =>
                  setForm({ ...form, dept: e.target.value })
                }
                required
              />

              <input
                placeholder="Project Title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                required
              />

              <input
                placeholder="Description"
                value={form.desc}
                onChange={(e) =>
                  setForm({ ...form, desc: e.target.value })
                }
              />

              <input
                placeholder="Image URL"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

              <input
                placeholder="Project Link"
                value={form.link}
                onChange={(e) =>
                  setForm({ ...form, link: e.target.value })
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
                <button type="submit">Submit</button>
                <button
                  type="button"
                  className="cancelBtn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
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
                <span>{item.dept}</span>
              </div>

              <a href={item.link}>View Project →</a>

              <button
                className="likeBtn"
                onClick={() => handleLike(item.id)}
              >
                ❤️ {likes[item.id] || 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}