import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  // you'll need to track the current beanieBaby in state
  const [currentBeanie, setCurrentBeanie] = useState({});

  // you'll need to get the route param using the appropriate react router hook
  const params = useParams();


  useEffect(() => {
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
    async function fetch() {
      const singleBeanie = await getSingleBeanie(params.id);

      setCurrentBeanie(singleBeanie);
    }

    fetch();
  }, [params.id]); // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes 

  function handleBeanieClick() {
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
  }

  return (
    <>
      {/* Feel free to uncomment and use the below code--but you'll need to figure out how to keep it from blowing up on load */}
      
      <Link to='/'>Home</Link>
      <div className='beanie-detail' onClick={handleBeanieClick}>
        <div className='beanie-data'>
          <p>{currentBeanie.animal}</p>
          <p>{currentBeanie.title}</p>
          <p>Zodiac: {currentBeanie.astroSign}</p>
          <p> Born on {currentBeanie.birthday}</p>
          <img className='beanie-img' src={currentBeanie.image}/>
          <p>Color: {currentBeanie.color}</p>
          <p>Release Date: {currentBeanie.releaseDate}</p>
          <p>Retirement Date: {currentBeanie.retirementDate}</p>

          <p>Size: {currentBeanie.size}</p>
          <p>Theme: {currentBeanie.theme}</p>
          <p>Sub-Theme: {currentBeanie.subtheme}</p>
          <p>Style Number: {currentBeanie.styleNumber}</p>
          <p>Swing Tag Generation: {currentBeanie.swingTagGeneration}</p>
          <p>Tush Tag Generation: {currentBeanie.tushTagGeneration}</p>
        </div>
      </div>  
    </>
  );
}
