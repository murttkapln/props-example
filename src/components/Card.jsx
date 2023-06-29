

const Card = ({name, imgURL, phone,email}) => {

  return (
    <div style={{minWidth:"300px", maxWidth:"400px", maxHeight:"400px", minHeight:"150px"}} className="card w-50 m-auto p-3 rounded-circle btn btn-warning">
        <div>
        <img src={imgURL} alt="{name}" />
            <h3 className="display-3 fw-bolder text-danger">{name}</h3>
      </div>
      <div className="m-4">
        <p className="text-info btn btn-dark d-block w-50">{phone}</p>
        <p className="text-info btn btn-success">{email}</p>
      </div>
    </div>
  )
}

export default Card