
import './App.css'
function Header() {
  return (
    <header className="site-header">
      <div className="logo">watch.it</div>

      <nav className="genres">
        <span>Action</span>
        <span>Comedy</span>
        <span>Romance</span>
        <span>Drama</span>
      </nav>

      <button type="button">SEARCH</button>
    </header>
  )
}
function MovieCard({ title, image, description }) {
  return (
    <article className="movie-card">
      <img
        src={`/assets/${image}`}
        alt={`${title} movie poster`}
      />
      <div className="movie-details">
        <p>{description}</p>
        <button type="button">WATCH NOW</button>
      </div>
    </article>
  )
}
function App() {
  return (
    <>
      <Header />
<main id="movies" className="movie-list">
  <MovieCard
    title="Who Framed Roger Rabbit"
    image="who-framed-roger-rabbit.jpg"
    description="In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!"
  />
  <MovieCard
    title="Hook"
    image="hook.jpg"
    description="Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic."
  />
  <MovieCard
    title="La La Land"
    image="la-la-land.jpg"
    description="Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!"
  />
  <MovieCard
    title="Hidden Figures"
    image="hidden-figures.jpg"
    description="Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers."
  />
  <MovieCard
    title="Palm Springs"
    image="palm-springs.jpg"
    description="A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways."
  />
  <MovieCard
    title="Barbie"
    image="barbie.jpg"
    description="Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!"
  />
</main>
    </>
  )
}
export default App
