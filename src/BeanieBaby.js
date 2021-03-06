import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  

  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/beanie-babies/${beanieBaby.id}`}>
      <div className='beanie-baby'>
        <img className='beanie-img' src={beanieBaby.image} />
        {beanieBaby.title}
      </div>
    </Link>
    
  );
}
