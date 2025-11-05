import React, { useState, useEffect } from 'react';

export default function EducationLoad() {
  const [programs, setPrograms] = useState([]);
  const [visible, setVisible] = useState(4);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const ALL_PROGRAMS = [
    { id: 1, name: 'B.Sc Computer Science', type: 'Undergraduate' },
    { id: 2, name: 'M.Sc Biotechnology', type: 'Postgraduate' },
    { id: 3, name: 'MBA (Finance)', type: 'Postgraduate' },
    { id: 4, name: 'B.A Psychology', type: 'Undergraduate' },
    { id: 5, name: 'M.Tech Data Science', type: 'Postgraduate' },
    { id: 6, name: 'B.Com Accounting', type: 'Undergraduate' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setPrograms(ALL_PROGRAMS);
      setLoading(false);
    }, 800);
  }, []);

  const filtered = filter === 'all' ? programs : programs.filter(p => p.type === filter);

  return (
    <section className="education-load">
      <style>{`
        .education-load{font-family: Inter, Roboto, Arial, sans-serif;color:#111}
        .hero{position:relative;display:flex;align-items:center;min-height:220px;background:#0f3350;color:#fff;padding:36px 60px;overflow:hidden}
        .hero .library-bg{position:absolute;inset:0;background:rgba(6,40,68,0.6);background-image:url('./bg-3.jpg');background-size:cover;background-position:center;z-index:0}
        .hero-inner{position:relative;z-index:2;width:100%;}
        .hero-inner h1{font-size: 54px;margin:0 0 8px;font-weight:700}
        .breadcrumb{color:#ffd27b;margin-top:6px;display:flex;gap:10px;align-items:center}
        .breadcrumb a{color:#ffd27b;text-decoration:none;font-weight:600}

        .content{padding:48px 60px;background:#fff;min-height:400px;}
        .filters{display:flex;gap:40px;margin-bottom:24px;flex-wrap:wrap;    justify-content: center;}
        .filter-btn{padding:9px 20px;border-radius:9px;border:1px solid rgba(0,0,0,0.1);background:#ffc333;cursor:pointer;font-weight:600;    font-size: 19px;}
        .filter-btn.active{background:#0f3350;color:#fff;box-shadow:0 6px 18px rgba(15,51,80,0.12)}

        .program-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px}
        .program-card{background:#f7f9fb;border-radius:12px;padding:20px;box-shadow:0 4px 10px rgba(0,0,0,0.05)}
        .program-card h3{margin:0 0 8px;color:#0f3350}
        .load-more{margin-top:30px;display:flex;justify-content:center}
        .load-btn{background:#ffc333;border:none;padding:10px 22px;border-radius:8px;font-weight:700;cursor:pointer}

        @media(max-width:900px){.hero{padding:28px 20px}.content{padding:28px 20px}}
        .program-grid{margin-top:71px}
      `}</style>

      {/* Hero Section with Breadcrumb */}
      <div className="hero" aria-label="Education Load hero">
        <div className="library-bg" aria-hidden></div>
        <div className="hero-inner">
          <h1>Educational Loan</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <span aria-hidden>•</span>
            <span aria-current="page">Educational Loan</span>
          </nav>
        </div>
      </div>

      <div className="content">
        <div className="filters">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'Undergraduate' ? 'active' : ''}`} onClick={() => setFilter('Undergraduate')}>Undergraduate</button>
          <button className={`filter-btn ${filter === 'Postgraduate' ? 'active' : ''}`} onClick={() => setFilter('Postgraduate')}>Postgraduate</button>
        </div>

        <div className="program-grid">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="program-card" style={{ opacity: 0.6 }}>Loading...</div>
            ))
          ) : (
            filtered.slice(0, visible).map((p) => (
              <div key={p.id} className="program-card">
                <h3 style={{ fontSize: 20 }}>{p.name}</h3>
                <p style={{ margin: 0 }}>{p.type}</p>
              </div>
            ))
          )}
        </div>


      </div>
    </section>
  );
}
