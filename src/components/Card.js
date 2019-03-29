import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Context from '../Context';
import Editor from './Editor';

import './Card.scss';

const Card = ({ match }) => {
    return (
        <div className="content">
            <section className="card">
                <article className={match.params.card} id="card">
                    <Context.Consumer>
                        {(context) => (
                            <div>
                                <h1>{context.title}</h1>
                                <hr />
                                <h2>{context.subtitle}</h2>
                                <p>{context.content}</p>
                                {
                                    context.date.length > 0 || context.hour.length > 0 ?
                                        <div className="timer">
                                            <span className="date">{context.date}</span>
                                            <span className="hour">{context.hour}</span>
                                        </div> : ''
                                }
                                <ul>
                                    {context.whatsapp.length > 0 ? <li><FontAwesomeIcon icon={faWhatsapp} /> {context.whatsapp}</li> : ''}
                                    {context.phone.length > 0 ? <li><FontAwesomeIcon icon={faPhone} /> {context.phone}</li> : ''}
                                    {context.email.length > 0 ? <li><FontAwesomeIcon icon={faEnvelope} /> {context.email}</li> : ''}
                                    {context.adress.length > 0 ? <li><FontAwesomeIcon icon={faMapMarkerAlt} /> {context.adress}</li> : ''}
                                </ul>
                            </div>
                        )}
                    </Context.Consumer>
                </article>
            </section>
            <Editor />
        </div>

    )
}

export default Card;