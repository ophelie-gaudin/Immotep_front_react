import React from 'react';
import { FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const HousingCard = (props) => {
  const { data } = props;
  const housing_id = data.id;
  const { project_id } = useParams();

  return (
    <div className='project-card'>
      <div className='project-card-text-scale'>
        <div className='project-card-title'>{data.ad_price}</div>
        <div className='project-card-localization'>{data.localization}</div>
        <div className='project-card-comment'>{data.notary_fees}</div>
      </div>
      <span>
        <FaKey className='project-card-icon rotate' />
      </span>
      <div className='project-card-comment'>
        <Link to={`/dashboard/${project_id}/housing/${housing_id}/edit`}>
          Modifier le logement
        </Link>
        <Link to={`/dashboard/${project_id}/housing/${housing_id}`}>
          Voir le logement
        </Link>
      </div>
    </div>
  );
};

export default HousingCard;
