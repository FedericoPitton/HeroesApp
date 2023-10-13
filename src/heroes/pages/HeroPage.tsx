import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById, ISuperhero } from "../helpers";
import './PageStyle.css'

export const HeroePage = () => {
  const { heroId } = useParams();
  const [heroActive, setHeroActive] = useState<ISuperhero | null>(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchHero = async () => {
    try {
      if (heroId) {
        const heroe = await getHeroeById(heroId);
        setHeroActive(heroe);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setRedirectToHome(true);
      setIsLoading(false);
    }
  };

  const onNavigateBack = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetchHero();
  }, [heroId]);

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {heroActive ? (
        <div className="row mt-5">
          <div className={`col-12 col-md-4 image-below-text`}>
            <img
              src={heroActive.images.lg}
              alt={heroActive.name}
              className="img-thumbnail animate__animated animate__fadeInLeft"
            />
          </div>
          <div className="col-12 col-md-8 animate__animated animate__fadeInUp">
            <h3>{heroActive.name}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> {heroActive.biography.fullName}</li>
              <li className="list-group-item"><b>Publisher:</b> {heroActive.biography.publisher}</li>
              <li className="list-group-item"><b>First Appearance:</b> {heroActive.biography.firstAppearance}</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{heroActive.biography.aliases}</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => onNavigateBack()}
            >
              Regresar
            </button>
          </div>
        </div>
      ) : (
        <div>No se encontró el héroe</div>
      )}
    </>
  );
}
