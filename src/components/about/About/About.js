import React from 'react';
import styles from './About.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx('About')}>

      <div className={cx('about-intro')}>
        <div className={cx('about-intro-head')}><span>About</span><br/><span className={cx('about-intro-subtitle')}>모노플리 소개</span></div>
        <div className={cx('about-intro-body')}>
          일상이라는 도화지에 문화라는 색을 칠해 보려고 합니다.<br/>
          일상에 소풍 날 같은 설레임을 선물 한다는 것<br/>
          일상에 예술이 스며 든다는 것<br/>
          일상에 혼자가 아닌 함께 꾸며 나간다는 것<br/>
          일상에 다채로운 색이 가득차길 바라는 이야기를 시작합니다.<br/><br/>
          우리가 플리마켓을 하는 이유, <strong>MONOFLEA</strong>
        </div>
      </div>

      <div className={cx('section-title')}><h2>플리마켓이란?</h2></div>
      <div className={cx('section', 'section-step1')}>
        <div className={cx('section-inner')}>
          <div className={cx('section-contents')}>
            현대의 플리마켓은 사용하던 물건을 재활용 하거나 <br/>
            필요에 의해 사고 파는 벼룩시장이라 불리던 시장이 아닌,<br/>
            더 발전된 개념으로 장터 뿐만 아니라 <br/>
            문화 교류 및 문화 창출을 활성화 시켜<br/> 
            문화의 장으로써 새로운 트랜드를 형성하는<br/> 
            문화마켓으로 진보하였습니다.<br/><br/>

            이러한 플리마켓은 예술적 장르와 분야, 소속 등의 경계를 허물고<br/> 
            누구나 활동할 수 있으며,<br/> 
            자발적으로 운영되며,<br/> 
            예술가와 비예술가의 경계 없이 <br/>
            도심속에서 누구나 쉽게 접할 수 있으며,<br/> 
            일상 속에서 자연스럽게 스며들어<br/> 
            예술과 문화에 대해를 진입장벽을 느끼지 않게<br/> 
            누구나 쉽게 체험하고,<br/>
            새로운 도시 문화를 생성하는<br/> 
            참여형 마켓이라고 볼 수 있습니다.
          </div>
        </div>
      </div>

      <div className={cx('section-title')}><h2>한국형 플리마켓 시장의 대중화!!<br/>"모노플리"</h2></div>
      <div className={cx('section', 'section-step2')}>
        <div className={cx('section-inner')}>
          <div className={cx('section-contents')}>
            <h3>"플리마켓은 재능있는 참여자들이<br/> 만들어 나가는 소중한 관광자원"</h3>
            <p>미국 ‘브루클린 파머스 마켓’, ‘폭스 플라자 플리마켓’,<br/>
            프랑스 ‘포르트 드 생투앙’,<br/>
            일본 ‘요오기 플리마켓’,<br/>
            스페인의 엘 라스트로,<br/>
            영국의 포토벨로 등<br/><br/>
            세계적인 관광 코스로 자리잡은 플리마켓이 많이 있고,<br/>
            한국에도 특색있는 플리마켓 행사가 진행되고 있습니다.</p>
          </div>
        </div>
      </div>

      <div className={cx('section', 'section-step3')}>
        <div className={cx('section-inner')}>
          <div className={cx('section-contents')}>
            <h3>"플리마켓은 사람들과 소통하는 문화의 장"</h3>
            <p>지역마다 특색있고 다양한 분위기의 플리마켓은<br/>
            단순히 물품을 사고 파는 것을 넘어<br/>
            예술가들이 자유롭게 작품을 선보이고<br/>
            사람들과 소통하는 축제형식의<br/>문화공간으로 자리잡고 있습니다.</p>
          </div>
        </div>
      </div>

      <div className={cx('section', 'section-step4')}>
        <div className={cx('section-inner')}>
          <div className={cx('section-contents')}>
            <h3>"플리마켓은 지역민이 함께 교류하며,<br/> 만들어 나가는 나눔의 장"</h3>
            <p>아파트 문화의 폐쇄적인 도시 환경에서<br/>
            함께 나누고 공유할 수 있는 시간과 공간의 제공은<br/>
            플리마켓이 도시민들에게 줄 수 있는 작은 선물이며,<br/><br/>
            재능기부나 수익금 기부 등을 통해<br/>
            나눔의 실천 문화가 행해진다면 모든 참여자들에게<br/>
            '함께 나누는 기쁨' 이라는 큰 선물이 주어질 것입니다.</p>
          </div>
        </div>
      </div>

      <div className={cx('section', 'section-step5')}>
        <div className={cx('section-inner')}>
          <div className={cx('section-contents')}>
            <h3>"플리마켓은 개성있는 상품의 구매가 가능한 쇼핑의 장이자,</h3>
            <h3>1인 창업가와 청년 예술가들에게<br/> 주어지는 기회의 장"</h3>
          </div>
        </div>
      </div>

      <div className={cx('section', 'section-step6')}>
        <div className={cx('section-inner')}>
          <div className={cx('section-contents')}>
            <h3>""모노플리는 재능기부로 만들어진 사회적 실천""</h3>
          </div>
        </div>
      </div>

      <div className={cx('section', 'section-step7')}>
        <div className={cx('section-inner')}>
          <div className={cx('section-contents')}>
            <h3>MONOFLEA TEAM</h3>
            <div className={cx('section-team')}>

              <div className={cx('team')}>
                <img src="http://www.worldhotel.co.kr/main/img/avatar/avatar1.png" alt="team"/>
                <div className={cx('team-info')}>
                  Normal Paragraph - Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Fusce pellentesque risus in enim porta aliquam.<br/> In vitae risus purus.
                </div>
              </div>
              <div className={cx('team')}>
                <img src="http://www.worldhotel.co.kr/main/img/avatar/avatar1.png" alt="team"/>
                <div className={cx('team-info')}>
                  Normal Paragraph - Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Fusce pellentesque risus in enim porta aliquam.<br/> In vitae risus purus.
                </div>
              </div>
              <div className={cx('team')}>
                <img src="http://www.worldhotel.co.kr/main/img/avatar/avatar1.png" alt="team"/>
                <div className={cx('team-info')}>
                  Normal Paragraph - Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Fusce pellentesque risus in enim porta aliquam.<br/> In vitae risus purus.
                </div>
              </div>
              <div className={cx('team')}>
                <img src="http://www.worldhotel.co.kr/main/img/avatar/avatar1.png" alt="team"/>
                <div className={cx('team-info')}>
                  Normal Paragraph - Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Fusce pellentesque risus in enim porta aliquam.<br/> In vitae risus purus.
                </div>
              </div>
              <div className={cx('team')}>
                <img src="http://www.worldhotel.co.kr/main/img/avatar/avatar1.png" alt="team"/>
                <div className={cx('team-info')}>
                  Normal Paragraph - Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Fusce pellentesque risus in enim porta aliquam.<br/> In vitae risus purus.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;