import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import WarningArea from '../../components/Main/WarningArea/index';
import '../../components/FormsCard/FormsCard.css';
import { Link } from 'react-router-dom';

const HousingDetails = (props) => {
  return (
    <div>
      <div>
        <div className='flex flex-col rounded-[0.25rem] mt-24 mb-12 mx-auto w-[85vw] max-w-[1800px] border-2 border-primary text-whiite '>
          <div className='px-8 py-8 bg-primary mb-8'>
            <Link className='flex items-center' to={props.returnUrl || '/'}>
              <FaArrowLeft className='form-arrow-icon' />{' '}
              {props.returnText || 'Retour'}
            </Link>
            <h2 className='text-center text-3xl font-pacifico'>
              {props.title}
            </h2>
            {props.warning && <WarningArea>{props.warning}</WarningArea>}
          </div>
          <div className='p-6'>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default HousingDetails;
