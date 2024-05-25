import bgImg from '../images/result-bg.png'
import logoimg from '../images/icons/logo.png'
import stars from '../images/stars.png'
import tipimg from '../images/icons/result-graph-tip.png'

import '../css/Result.css'
import Footer from '../components/Footer'


function Result() {
    document.body.style.backgroundImage = `url(${bgImg})`

    return (
        <div className='result'>
            <img src={logoimg} className="logoimg" />
            <div className='result-container'>
                <div className='type-container'>
                    <p className='your-type your-type-first'>당신의 타입은...</p>
                    <div className='type-name-stars'>
                        <img src={stars} className="stars stars-first" />
                        <p className='type-name'>Setter</p>
                        <img src={stars} className="stars stars-end" />
                    </div>
                    <p className='your-type your-type-end'>입니다</p>
                </div>
                <div className='type-description'>
                    <div className='type-li-container'>
                        <li className='type-li'>여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기  <br></br>
                            여기는 타입의 설명을 쭉 쓰기
                        </li>
                        <li className='type-li'>여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기  <br></br>
                            여기는 타입의 설명을 쭉 쓰기
                        </li>
                    </div>
                    <div className='finding-friend-graph'>
                        <div className='finding-friend'>
                            <div className='similar-friend'>
                                <p>나와 비슷한 친구</p>
                            </div>
                            <p className='same-answers'>10개 중 같은 답을 선택한 개수</p>
                        </div>
                        <div className='friend-graph-name-container'>
                            <div className='friend-graph-container'>
                                <div className='friend friend-graph-1'>
                                    <p className='answer-num-1'>9개</p>
                                    <div className='graph graph-1'></div>
                                    <p className='friend friend-name-1'>윤서</p>
                                </div>
                                <div className='friend friend-graph-2'>
                                    <p className='answer-num-2'>8개</p>
                                    <div className='graph graph-2'></div>
                                    <p className='friend friend-name-2'>엉덩이</p>
                                </div>
                                <div className='friend friend-graph-3'>
                                    <p className='answer-num-3'>4개</p>
                                    <div className='graph graph-3'></div>
                                    <p className='friend friend-name-3'>뿡뿡</p>
                                </div>
                                <div className='friend friend-graph-4'>
                                    <p className='answer-num-4'>2개</p>
                                    <div className='graph graph-4'></div>
                                    <p className='friend friend-name-4'>빵구</p>
                                </div>
                            </div>
                            <div className='friend-graph-bg'></div>

                        </div>
                    </div>
                    <div className='graph-tip'>
                        <img src={tipimg} className="tip-img" />
                        <p className='tip-text'>
                            그래프를 클릭하면 그 친구에게 편지를 쓸 수 있어요!
                        </p>
                    </div>
                </div>
                <button className='retry-btn'>검사 다시하기</button>
                <button className='hotplace'>친구와 핫플 보기</button>
            </div>
            <Footer />
        </div>
    )
}

export default Result;