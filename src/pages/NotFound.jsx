import React from 'react'

const NotFound = () => {
  return (
    <div className="notFound m-auto pt-48">
        <img src={process.env.PUBLIC_URL + "images/404.png"} alt="404" />
    </div>
  )
}

export default NotFound