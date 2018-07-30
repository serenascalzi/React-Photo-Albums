import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AlbumList from './AlbumList'

class EachAlbum extends Component {
  state = {
    id: null,
    name: '',
    image: '',
    photos: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/albums/${this.props.match.params.id}?_embed=photos`).then(resp => {
      this.setState({
        id: resp.data.id,
        name: resp.data.name,
        image: resp.data.image,
        photos: resp.data.photos
      })
    })
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      axios.get(`http://localhost:3001/albums/${newProps.match.params.id}?_embed=photos`).then(resp => {
        this.setState({
          id: resp.data.id,
          name: resp.data.name,
          image: resp.data.image,
          photos: resp.data.photos
        })
      })
    }
  }

  render() {
    return (
      <div>
        <AlbumList />
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.photos.map(photo => (
            <li key={'photo' + photo.id}><Link to={`/photos/${photo.id}`}><img src={photo.image} alt="" /></Link></li>
          ))}
        </ul>
        <p><Link to={"/"}>Back to Albums</Link></p>
      </div>
    )
  }
}

export default EachAlbum
