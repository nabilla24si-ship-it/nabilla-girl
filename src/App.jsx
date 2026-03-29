import './custom.css';

// 1. Child Component: Foto Profil
function ProfilePicture() {
    return (
        <div style={{ textAlign: 'center' }}>
            
            <img 
                src="/img/foto.png" 
                alt="Avatar" 
                style={{ 
                    width: '120px',   
                    height: '120px', 
                    borderRadius: '50%', 
                    border: '3px solid #007bff',
                    objectFit: 'cover' 
                }} 
            />
        </div>
    );
}

// 2. Child Component: Judul Portofolio
function PortfolioHeader({ nama }) {
    return (
        <div className="profile-header">
            <h1 style={{ margin: 0 }}>Portfolio Diri</h1>
            <p>Halo, saya <strong>{nama}</strong></p>
        </div>
    );
}

// 3. Child Component: Detail Identitas (Menggunakan Props)
function IdentityDetail({ label, value }) {
    return (
        <div className="info-section">
            <span className="label">{label}</span>: {value}
        </div>
    );
}

// 4. Child Component: Status (Menggunakan JS Logic toUpperCase)
function StatusProdi({ prodi }) {
    return (
        <div className="info-section">
            <span className="label">Prodi</span>: {prodi.toUpperCase()}
        </div>
    );
}

// 5. Child Component: Skill/Keahlian (Nested List)
function SkillBadges() {
    const skills = ["React.js", "JavaScript", "UI Design", "System Analysis"];
    return (
        <div className="badge-container">
            <span className="label">Skills:</span><br/>
            {skills.map(skill => <span key={skill} className="badge">{skill}</span>)}
        </div>
    );
}

// 6. Child Component: Footer
function Footer() {
    return (
        <footer>
            <hr />
            <p>© 2026 - {new Date().getFullYear()} | Politeknik Caltex Riau</p>
        </footer>
    );
}

// PARENT COMPONENT
export default function BiodataDiri() {
    const biodata = {
        nama: "Nabilla Suharman",
        nim: "2457301105",
        prodi: "Sistem Informasi",
        kampus: "Politeknik Caltex Riau"
    };

    return (
        <div className="card">
            <ProfilePicture />
            <PortfolioHeader nama={biodata.nama} />
            
            <IdentityDetail label="NIM" value={biodata.nim} />
            <StatusProdi prodi={biodata.prodi} />
            <IdentityDetail label="Kampus" value={biodata.kampus} />
            
            <SkillBadges />
            <Footer />
        </div>
    );
}