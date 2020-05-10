import React from 'react';
import './styles.css'
import rockImg from '../../assets/rock.svg'
import paperImg from '../../assets/paper.svg'
import scissorsImg from '../../assets/scissors.svg'
import {FaRegHandScissors, FaHandRock, FaRegHandPaper} from 'react-icons/fa'

function playerInterface({playerName}) {
    // const name = this.props.playerName;
  return (
    <div className="component-container">
      <header>{playerName}</header>
      <img src={rockImg} style={{width: 120}}/>
    </div>
  );
}

export default playerInterface;