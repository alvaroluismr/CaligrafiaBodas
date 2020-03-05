import React from "react"
import cuerpoStyle from "./cuerpoStyle.module.css"
import redondilla from "../img/redondilla.png"
import espanola from "../img/espanola.png"
import espanolaClasica from "../img/espanolaClasica.png"
import gotica from "../img/gotica.png"
import goticaAlemana from "../img/goticaAlemana.png"

export default () => (

  <div className={cuerpoStyle.cuerpoall}>
    <div className={cuerpoStyle.parrafo}>
      <p>Dispone de 5 tipografías distintas donde elegir</p>
    </div>
    <ul>
      <li>
        <div className={[cuerpoStyle.muestraletra, cuerpoStyle.muestraletrapeque].join(' ')}>
          <div className={cuerpoStyle.fotogaleria}>
            <figure><img src={redondilla} alt="Redondilla muestra"></img></figure>
          </div>
          <h1>Redondilla</h1>
        </div>
      </li>
      <li>
      <div className={[cuerpoStyle.muestraletra, cuerpoStyle.muestraletrapeque].join(' ')}>
          <figure><img src={espanola} alt="Española muestra"></img></figure>
          <h1>Española</h1>
        </div>
      </li>
      <li>
      <div className={[cuerpoStyle.muestraletra, cuerpoStyle.muestraletrapeque].join(' ')}>
          <figure><img src={espanolaClasica} alt="Española Clásica muestra"></img></figure>
          <h1>Española Clásica</h1>
        </div>
      </li>
      <li>
      <div className={[cuerpoStyle.muestraletra, cuerpoStyle.muestraletragrande].join(' ')}>
          <figure><img src={gotica} alt="Gótica muestra"></img></figure>
          <h1>Gótica</h1>
        </div>
      </li>
      <li>
      <div className={[cuerpoStyle.muestraletra, cuerpoStyle.muestraletragrande].join(' ')}>
          <figure><img src={goticaAlemana} alt="Gótica Alemana muestra"></img></figure>
          <h1>Gótica Alemana</h1>
        </div>
      </li>
    </ul>
  </div>
)