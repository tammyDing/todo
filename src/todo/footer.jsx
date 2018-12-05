export default {
  data () {
    return {
      author: 'Tammy'
    }
  },
  render () {
    return (
      <div id="footer">
        <span> Written by {this.author} </span>
      </div>
    )
  }
}