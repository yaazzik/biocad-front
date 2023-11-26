import {useEffect, useState} from 'react';
import './MainPage.css'
import {ReactComponent as SearchQRIcon} from '../../assets/SearchQR.svg';
import {ReactComponent as FavoriteIcon} from '../../assets/favorite.svg';
import {ReactComponent as AlarmOn} from '../../assets/alarmOn.svg';
import {ReactComponent as AlarmOff} from '../../assets/alarmOff.svg';
import {ReactComponent as AlarmNeutral} from '../../assets/alarmNetural.svg';
import {getTools} from "../../api/getTools";
import {data} from "./dataFromBack";

const MainPage = () => {
  const [tools, setTools] = useState([])

  // useEffect(() => {
  //   getTools().then(
  //     res => {
  //       setTools(res.tool);
  //       console.log(res.tool)
  //     }
  //   )
  // }, [setTools]); // Если запустить бекенд локально, то тут отправится запрос, и с него получатся данные.

  setTools(data.tool)

  return (
    <div className='MainPage'>
      <div className='search'>
        <input placeholder='Поиск прибора в Botanique по номеру, названию, подразделению и др.' className='searchInput' />
        <SearchQRIcon className='searchQR' />
      </div>
      <div className='favorite'>
        <header className='favHeader'>
          <FavoriteIcon />
          <p className='favHeaderText'>Любимые приборы</p>
        </header>
        <div className='tools'>
          <div className='toolsHeader'>
            <p className='toolsHeaderCol1'>Название</p>
            <p className='toolsHeaderCol2'>Статус</p>
          </div>
          {tools ? tools.map(tool => {
            return(
              <div key={tool._id} className='toolRow'>
                <div className='toolRowCells'>
                  <img className='toolRowImg' alt='toolImg' src={tool.img} />
                  <p className='toolRowNameText'>{tool.name}</p>
                  <select className='toolRowSelect'>
                    <option>Свободен</option>
                    <option>Занят</option>
                  </select>
                  {tool.alarm === 'on' ? (<AlarmOn />) : tool.alarm === 'off' ? (<AlarmOff />) : (<AlarmNeutral />)}
                </div>
                <div className='toolRowDivider' />
              </div>
            )
          }) : null}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
