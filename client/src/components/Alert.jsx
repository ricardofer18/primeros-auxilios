const Alert = ({ errorMessage, type }) => {
  return (
    <div className={`col-3 alerta text-white fs-5 bg-${type} shadow-lg rounded-3 p-3`}>
        <img src='https://img.icons8.com/?size=25&id=59782&format=png' className='invert-1 pe-2' />
        {errorMessage}
    </div>
  );
};

export default Alert;