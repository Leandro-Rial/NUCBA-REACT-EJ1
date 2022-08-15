import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import pokeball from '../img/PngItem_1634065.png'

const Home = () => {
  const users = useSelector(state => state.todo.users);

  return (
    <div className="home--wrapper bg-dark">
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={ users[0] ? "nav-link is_user" : "nav-link" } to="/todoList">TodoList_EJ1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pokelink" to="/pokeAPI"><img src={pokeball} alt="" style={{ width: "15px" }} /> PokeAPI</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Home