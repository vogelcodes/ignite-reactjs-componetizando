import { Button } from "./Button"

interface SideBarProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;  }[]
  selectedGenreId: number,
  handleClick: Function
}

export function SideBar(props: SideBarProps ) {
  const { genres, selectedGenreId, handleClick} = props
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
  <div className="buttons-container">
          {genres.map(genre => (
            <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
            />
            ))}
        </div>

      </nav>
)
}