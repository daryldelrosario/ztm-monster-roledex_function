import './search-box.css';

const SearchBox = () => {

  return (
    <input 
      className={`search-box ${this.props.className}`}
      type='search' 
      placeholder={this.props.placeholder}
      onChange={this.props.onChangeHandler}
    />
  )
}

// class SearchBox extends Component {

//   render() {
//     return (
//       <>
//         <input 
//           className={`search-box ${this.props.className}`}
//           type='search' 
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//       </>
//     )
//   }
// }

export default SearchBox;