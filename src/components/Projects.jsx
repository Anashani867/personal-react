



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const token = ''; // استبدل هذا بالتوكين الجديد
    const username = ''; // اسم المستخدم الخاص بك

    // طلب البيانات باستخدام التوكين الجديد مع fetch
    axios.get(``, {
      headers: {
        Authorization: `Bearer ${token}`, // تمرير التوكين في رأس الطلب
      }
    })
      .then((response) => {
        const repos = response.data;
        const filteredRepos = [];

        // تصفية المستودعات بناءً على اسم المشروع الذي يحتوي على "project"
        for (const repo of repos) {
          if (repo.name.toLowerCase().includes('project')) { // تصفية المشاريع التي تحتوي على "project" في اسمها
            filteredRepos.push(repo); // أضف المشروع إلى القائمة
          }
        }

        setFilteredProjects(filteredRepos); // تعيين المشاريع المصفاة
        setLoading(false); // إيقاف حالة التحميل
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
    <section id="projects">
      <div className="projects-header">
        <h2>Projects with "Project" in the Name</h2>
      </div>
      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((repo) => (
            <div key={repo.id} className="project-box">
              <h4>{repo.name}</h4>
              <p>{repo.description || 'No description available.'}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <button className="btn">View on GitHub</button>
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

