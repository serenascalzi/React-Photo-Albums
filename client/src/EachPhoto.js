import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EachPhoto extends Component {
  state = {
    photo: {}
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/photos/${this.props.match.params.id}`).then(resp => {
      this.setState({
        photo: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.photo.location}</h1>
        <img src={this.state.photo.image} alt="" />
        <p><Link to={`/albums/${this.state.photo.albumId}?_embed=photos`}>Back to Album</Link></p>
      </div>
    )
  }
}

export default EachPhoto
