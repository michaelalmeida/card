import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home">
            <div className="content">
                <h1>Crie seu próprio convite</h1>
                <p>Aqui você poderá escolher dentre os diversos modelos disponíveis e então baixar o seu cartão personalizado para compartilhar com seus amigos e familiares.</p>
                <Link className="btn" to="/card/card-flat-one">Comece agora</Link>
            </div>
        </section>
    );
}

export default Home;