import React from "react"
import Cabecera from "../components/cabecera"
import Cuerpo from "../components/cuerpo"
import Pie from "../components/pie"

export default () => {

  return (
    <div style={{height: '100%'}}>
      <Cabecera />
      <Cuerpo />
      <Pie />
    </div>
  )
}
