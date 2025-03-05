import Card from '../card/card';
import './card-list.css';

const CardList = () => {
  const { monsters } = this.props;

  return (
    <>
      <div className='card-list'>
        {monsters.map((monster) => {
          return (
            <Card monster={monster} />
          )
        })}

      </div>
    </>
  )
}

// class CardList extends Component {
  
//   render() {
//     const { monsters } = this.props;

//     return (
//       <>
//         <div className='card-list'>
//           {monsters.map((monster) => {
//             return (
//               <Card monster={monster} />
//             );
//           })}
//         </div>
//       </>
//     )
//   }
// }

export default CardList;