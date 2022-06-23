
const Card = () => {
  return (
    <div className="card p-5 rounded border border-white bg-white drop-shadow-xl w-auto">
      <img src={process.env.PUBLIC_URL + "images/icon-dkprs-1.png"} className="float-center pl-5 pr-5" />
      
      <div className="title text-md p-2">
        BOR
      </div>
      <div className="amount text-3xl p-2">
        55.9
      </div>
    </div>
  )
}

export default Card