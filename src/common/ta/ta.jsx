import React, { Component } from 'react';
import { List, InputItem, Flex, WingBlank, Carousel } from 'antd-mobile';
import { Input } from 'antd'

import wo from './../../assets/dog/you.png'
import taStyle from '../css/ta.module.scss'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
const inputChange = e => {
  console.log(e.target.value)
}
class ta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  inputChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <div className='header' style={styles.header}>
          <div style={styles.imgWrapper}>
            <img src={wo} alt="wo in ta" style={styles.headerImg} />
          </div>


          {/* <Input
            style={{ border: 'none', flex: .8, borderRadius: 20, overflow: 'hidden', height: 30, background: "#f8f8f8" }}
            placeholder='wwkissocool'
            type='text'
            onChange={this.inputChange}
            allowClear
          >
          </Input> */}
          <InputItem
            clear
            placeholder="wwkissocool"
            ref={el => this.autoFocusInst = el}
            style={styles.headerInput}
          ></InputItem>
          {/* <Input placeholder="wwkissocool" allowClear onChange={inputChange} /> */}

          <div>
            wwk
          </div>
        </div>
        <div className={taStyle.content}>
          <WingBlank>
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
      </div>
    )
  }
}
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    background: 'white'
  },
  headerImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%"
  },
  imgWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    background: "#f8f8f8",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerInput: {
    width: 200,

  },
  body: {
    width: "100%",
    backgroundColor: 'red',
  }
}
export default ta