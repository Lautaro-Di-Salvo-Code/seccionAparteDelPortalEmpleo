import React from 'react'


export const Body = ({infoHeaderHome, CiudadanoEmpleador, capacitacionTrabajo, inscriptionCursosCursosCortos , videosInformativos, agenciasTerrOficinas, footer}) => {


  return (
    <>
    
    {/* carrusel del header */}
     <div className="carrusel  ">
        <div className="carrusel-items">

          <div style={{backgroundImage:`url(${infoHeaderHome.op1.img})`  }} className="carrusel-item">
            <h2 className='parr-carrusel' >{infoHeaderHome.op1.titulo }</h2>   
            <p>{infoHeaderHome.op1.subtitulo}</p>
            <div className='tutorial-button'>

            <button>{infoHeaderHome.op1.boton}</button>

            </div>
            </div>
          <div style={{backgroundImage: `url(${infoHeaderHome.op2.img})`   }} className="carrusel-item">
            <h2 className='parr-carrusel' >{infoHeaderHome.op2.titulo }</h2>   

            <p>{infoHeaderHome.op2.subtitulo}</p>
            <div className='tutorial-button'>

            <button>{infoHeaderHome.op2.boton}</button>
            </div>
            </div>
          <div style={{backgroundImage: `url(${infoHeaderHome.op3.img})`  }} className="carrusel-item">
            <h2 className='parr-carrusel' >{infoHeaderHome.op3.titulo }</h2>   
            <p>{infoHeaderHome.op3.subtitulo}</p>
            <div className='tutorial-button'>

            <button>{infoHeaderHome.op3.boton}</button>
            </div>

            </div>
        </div>

       

    </div>
    {/* // seccion de soy cuidadano, soy empleador */}
    <div className='seccionSoyCiudadano'>
      <h3 style={{borderBottom: " 7px solid #004f90", display: "grid", justifyItems: "center", width: "100%", }}>{CiudadanoEmpleador.sobretitulos.op1}</h3>
      <h3 style={{borderBottom: " 7px solid #dcddde", display: "grid", justifyItems: "center", width: "100%", }}>{CiudadanoEmpleador.sobretitulos.op2}</h3>
    </div>
    <section className="grid-section">
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op1.img} alt="" />  
        <h3>{CiudadanoEmpleador.op1.titulo}</h3>
            <h5>{CiudadanoEmpleador.op1.sub}</h5>
        </div>
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op2.img} alt="" />  
        <h3>{CiudadanoEmpleador.op2.titulo}</h3>
            <h5>{CiudadanoEmpleador.op2.sub}</h5>
        </div>
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op3.img} alt="" />  
        <h3>{CiudadanoEmpleador.op3.titulo}</h3>
            <h5>{CiudadanoEmpleador.op3.sub}</h5>
        </div>
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op4.img} alt="" />  
            <h3>{CiudadanoEmpleador.op4.titulo}</h3>
            <h5>{CiudadanoEmpleador.op4.sub}</h5>
        </div>
    </section>

  {/* curso capacitacion para el trabajo */}
    {/* imagen de chica con lentes  */}

    <section style={{backgroundImage: `url(${capacitacionTrabajo.img})`}} className="grid-section-bg">
      <article className='capacitacionTrabajo-stiles'>
      <h2>{capacitacionTrabajo.titulo}</h2>
          <div>
              <p style={{fontWeight: "800", fontSize: "1.5rem"}}>{capacitacionTrabajo.tituloCaja}</p>
              <p  style={{color: "gray", fontWeight: "200", paddingTop: "1rem"}}>{capacitacionTrabajo.subCaja}</p>
          </div>
      </article>
    </section>

{/* 
color: #fff;
      padding-top: 1rem;
      font-weight: 200;


*/}



    {/* informacion de cursos en otras entidades */}
    <section  className="grid-section2">
        <div className="grid-moreinfoCursos">
            
           <h3>{inscriptionCursosCursosCortos.op1}</h3> 
            </div>
        <div className="grid-moreinfoCursos"> 
           <h3>{inscriptionCursosCursosCortos.op2}</h3> 
            </div>
    </section>
    <hr />

    {/* videos informativos */}
    <p style={{fontSize: "2rem",  color: "#000", maxWidth: "983px", margin: "auto"}}>Videos informativos</p>
    <section  className="grid-section2">
        <div className='box-images'>

        <div style={{ backgroundImage: `url(${videosInformativos.img1})`}} className="grid-moreinfoimg">
            <p>{videosInformativos.op1}</p>
            <b>Ver Ahora</b>
        </div>
        </div>
        <div className='box-images'>

        <div style={{ backgroundImage: `url(${videosInformativos.img2})`}} className="grid-moreinfoimg">
            <p>{videosInformativos.op2}</p>
            <b>Ver Ahora</b>
        </div>
        </div>
    </section>
    
    {/* agencias territoriales */}
    <section style={{}} className="grid-section2">
        <div className="grid-moreinfo">
            <img style={{height: "3rem", width: "3rem"}} src={agenciasTerrOficinas.img1} alt="" />
           <h3>{agenciasTerrOficinas.op1}</h3> 
            </div>
        <div className="grid-moreinfo">
            <img style={{height: "3rem", width: "3rem"}} src={agenciasTerrOficinas.img2} alt="" />
            
            <h3>{agenciasTerrOficinas.op1}</h3> 
            </div>
    </section>
   

    </>
    )
    }
