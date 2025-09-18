import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/SheridanCollege-2025-logo.png" alt="Sheidan Datathon logo" width={50} height={50}></Image>
            <span style={{ fontWeight: "bold", fontSize: "20px", color: "#00175D" }}> Sheridan Datathon</span>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#footer">Register</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <Image src="/3d-sd-card.png" alt="SD Logo" width={250} height={250} />
        <h1>GDG Datathon 2025</h1>
        <p>Join us for a weekend of data, innovation, learning and collaboration.</p>
        <a href="#footer">Register Now</a>
      </section>

      <section  id="about">
        <h2>About the Event</h2>
        <blockquote>
          Sheridan Datathon 2025 brings together students, professionals, and innovators to solve real-world challenges using data.
        </blockquote>
        <p>
          Over the course of the event, participants will attend workshops, network with industry experts, and compete for exciting prizes.
        </p>
        <p>
          Whether you’re a beginner or an experienced data scientist, this event is designed to inspire creativity, collaboration, and learning.
        </p>
        <span className="visually-hidden">#GDGDatathon2025</span>
      </section>
      
       {/* Event Info Section */}
      <section id="events">
         <h2>Event Highlights</h2>
        <div className="cards">
          <div className="card">
            <h3>Workshops</h3>
            <p>Learn from data professionals and gain hands-on experience through interactive workshops.</p>
          </div>
          <div className="card">
            <h3>Networking</h3>
            <p>Connect with peers, mentors, and companies that are shaping the future of data science.</p>
          </div>
          <div className="card">
            <h3>Prizes</h3>
            <p>Win exciting prizes and showcase your skills to industry leaders and potential employers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <Image src="/SD-logo.png" alt="SD Logo" width={200} height={200} />
        <p>&copy; 2025 Sheridan Datathon. All rights reserved.</p>
        <div className="socials">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </>
  );
}
