import React, { useEffect } from 'react';
import *as THREE from 'three';
import VANTA from 'vanta/dist/vanta.clouds.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/all.min.css';
import './App.module.css';

const MeuCard = () => {
  useEffect(() => {
    VANTA.CLOUDS({
      el: "#cloud",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
    });
  }, []);

  return (
    <div id="cloud">
      <article className="card">
        <div className="position">
          <img src="EU redondin.png" className="img" alt="imagem" />
        </div>
        <div className="name">
          <h1>Gabriel Reis</h1>
        </div>

        <p className="description">
          Belo Horizonte,MG
        </p>
        <section>
          <p className="service">"Front-end developer and avid reader." </p>
          <ul>
            <div className="button container">
              <a href="https://github.com/ReisBiel23" className="oxi">
                <button className="btn btn-primary"><i className="fab fa-github"></i> GitHub</button>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-reis-undefined-6b4416279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="oxi">
                <button className="btn btn-primary"><i className="fab fa-linkedin"></i> LinkedIn</button>
              </a>
              <button className="btn btn-primary"> <i className="fab fa-twitter"></i> Twitter</button>
              <a href="https://www.instagram.com/reis__biel?igsh=cXNncXgzZzg2a2hk" className="oxi" >
                <button className="btn btn-primary"><i className="fab fa-instagram"></i> Instagram</button>
              </a>
            </div>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default MeuCard;
