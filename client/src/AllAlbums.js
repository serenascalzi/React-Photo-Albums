import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AllAlbums extends Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/albums').then(resp => {
      this.setState({
        albums: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Albums</h1>
        <ul>
          {this.state.albums.map(album => (
            <li key={'album' + album.id}><Link to={`/albums/${album.id}?_embed=photos`}><img src={album.image} alt="" /><br /><p>{album.name}</p></Link></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AllAlbums
