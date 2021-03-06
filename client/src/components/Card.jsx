import react from 'react';
import { Link } from 'react-router-dom';
import { changePopup } from '../actions';
import { useDispatch } from 'react-redux';
import './Card.css';

export default function Card({ name, types, img, id }) {
    const dispatch = useDispatch();

    function handlePopup(bool, id) {
        dispatch(changePopup(bool, id))
    }

    return (
        <span onClick={() => handlePopup([true, id])}>
            <div className='cardDiv'>
                <div className='Card' >
                    <img src={img} alt="img not found" className='Img' />
                    <div className="infoCards">
                        <h5 className='demotext'>{name}</h5>
                        <div className="divForTypesCard">
                            {
                                types && types.map(t => {
                                    return (
                                        <h6 className="eachTypeCard">• {t}</h6>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </span>
    )
};

