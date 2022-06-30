import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav } from 'react-bootstrap'
import '../App.css'

export default function Brand(props) {
    const brandText = props.text || props.children

    return (
      <span className='brand rainbow mb-3 mt-3'>{brandText}</span>
    )
}