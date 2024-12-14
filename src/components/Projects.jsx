import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css'; // ربط CSS الخاص بالمشاريع

function Projects() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const username = 'ooo'; // اسم المستخدم الخاص بك

    axios
      .get(`oooo`, {
        headers: {
          Authorization: `Bearer ${token}`, // تمرير التوكين في رأس الطلب
        },
      })
      .then((response) => {
        const repos = response.data;
        const filteredRepos = repos.filter((repo) =>
          repo.name.toLowerCase().includes('project') // تصفية المشاريع التي تحتوي على كلمة "project" في الاسم
        );

        setFilteredProjects(filteredRepos);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching repositories.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="services1">
      <div className="part_1">
        <h2>My GitHub Projects</h2>
      </div>
      <div className="part_2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((repo) => (
            <div key={repo.id} className="box">
              {/* إضافة رمز لكل مشروع */}
              <img
                src={`0000`}
                alt={repo.name}
                className="project-image"
              />
              <h4>{repo.name}</h4>
              <p>{repo.description || 'No description available.'}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View on GitHub
              </a>
            </div>
          ))
        ) : (
          <p>No projects found with "project" in the name.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
