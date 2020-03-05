import React from "react"
import cabeceraStyle from "./cabeceraStyle.module.css"
import Logo from "../img/Logo-titulo7.png"

export default () => (

  <div className={cabeceraStyle.fondotop}>
    <div className={cabeceraStyle.logo}>
      <figure>
        <img src={Logo} alt="Caligrafía Bodas" />
      </figure>
    </div>
    <p>Caligrafía hecha a mano para darle a tus eventos un toque elegante y clásico.</p>
  </div>
)