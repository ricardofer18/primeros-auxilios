/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const DocumentoPreview = ({}) => {
  const navigate = useNavigate()

  return (
    <button
      className='col bg-white rounded shadow pt-4 pb-4 border-0 m-3'
      onClick={() => navigate(`/home/ficha/documentttttttt`)}
    >
      <div className='col-12'>
        <img
          src='https://img.icons8.com/?size=1080&id=83153&format=png'
          className='col-6'
        />
        <h2 className='fs-4 pt-4'>Documento</h2>
        <h2 className='fs-5 display-1'>dd/mm/aaaa</h2>
      </div>
    </button>
  )
}

export default DocumentoPreview