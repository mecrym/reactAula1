import fotoPerfil from './assets/fotoDePerfil.jpg'

function Card(){

    return(//classes em react fica className="nome-da-classe" pq class é uma palvra reservada
        <div className="card">
            <img className="card-image" src={fotoPerfil} alt="foto de perfil" />
            <h2 className="card-title">Maria Moreira</h2>
            <p>I'm a web developer and Software engineer graduate.</p>
        </div>
    );
}

export default Card