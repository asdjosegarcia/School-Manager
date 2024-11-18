import React, { } from 'react'
import './SubjectPageById.css'
import { useParams } from 'react-router-dom';
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle';
import NavBar from '../../../../Components/Layouts/NavBar';
import GenericHorizontalCard from '../../../../Components/Cards/GenericHorizontalCard';
import FieldSVG from '../../../../SVG/FieldSVG';
import SubjectSVG from '../../../../SVG/SubjectSVG';


const SubjectPageById = () => {
  const { id } = useParams();
  return (
    <div className='SubjectPageById'>
      <NavBar />
      <HeaderTitle title={"Asignaturas"} />
      <GenericHorizontalCard
        image={<FieldSVG className={"image"} fill={"#17C500"} />}
        title={"Prof. ed sec en Biologia"}
        data={`ID: ${id}`}
      />
      <section className='field'>
        <div className='subject-card'>
          <SubjectSVG className={"image"} fill={"#17C500"} />
          <p className='name'>Matemáticas orientada a la educacion</p>
        </div>
        <p className='data'> Encargado: Jualian ramirez</p>
        <p className='data'> ID: 434323</p>


      </section>
      <section className='main'>
        <button className='selectableOne' >
          Alumnos(65)
          <img src="/icons/arrow-right.svg" alt="" />
        </button>
        <button className='selectableOne'>
          Exámenes(65)
          <img src="/icons/arrow-right.svg" alt="" />
        </button>

      </section>


    </div>
  )
}

export default SubjectPageById