import LineTit from '../../../components/lineTit';
import OneDep from '../../../components/onedep';
import KakaoMap from './map';
import './Way.css'

const Way = ()=>{

    return(
        <section className='subDefaultContent'>
            <OneDep subtit1={'오시는길'} subtit2={'주변안내'}/>
            <LineTit subtit={'오시는길'}/>   
            <div className='kakao flex'>     
                <KakaoMap />     
                <ul>
                    <li><img src="./icons8-location-96.png" alt="location icon" /><b>주소</b>
                    <p>(03045) 서울 종로구 사직로 161</p>
                    </li>
                    <li><img src="./icons8-call-100.png" alt="phone icon" /><b>연락처</b>
                    <p>대표전화 02-3700-3900 </p>
                    <p>팩스 02-3700-3909</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>지하철 이용시</li>
                    <li>버스 이용시</li>
                    <li>자가용 이용시</li>
                </ul>
            </div>
            
            
        </section>
    )

}

export default Way;