import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import './gallery.scss';
export default class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      gallery: null
    }
  }
  componentWillUnmount = () => {
      this.closeGallery();
  };
  openGallery = (item) => {
    const items = [
        {
            src: item,
            w: 0,
            h: 0,
        }
    ];
    const pswpElement = this.pswpElement;
    const options = {index: 0};
    this.gallery = new PhotoSwipe( pswpElement, PhotoswipeUIDefault, items, options);
    this.gallery.listen('gettingData', (index, item) => {
        const _this = this;
        if (item.w < 1 || item.h < 1) { // unknown size
            var img = new Image();
            img.onload = function() { // will get size after load
                item.w = this.width; // set image width
                item.h = this.height; // set image height
                _this.gallery.invalidateCurrItems(); // reinit Items
                _this.gallery.updateSize(true); // reinit Items
            };
            img.src = item.src; // let's download image
        }
    });
    this.gallery.init();
  };
  closeGallery = () => {
    if (!this.gallery) return;
    this.gallery.close();
  };
  render() {
    const imgData = [
      [
        'http://img3.imgtn.bdimg.com/it/u=449381655,1802660526&fm=27&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3483324472,1266574269&fm=27&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=199235888,3729309354&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=4258003164,2094219230&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=1447714881,2747577175&fm=27&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3922821493,2192962197&fm=27&gp=0.jpg'
      ],
      [
        'http://img2.imgtn.bdimg.com/it/u=1721999323,1827872221&fm=27&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1423712661,4252620429&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=290635245,1673389885&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=2086285791,3659552033&fm=27&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3793339215,1687065993&fm=27&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=2060331329,1796914042&fm=27&gp=0.jpg'
      ],
      [
        'http://img1.imgtn.bdimg.com/it/u=797884778,1116192353&fm=15&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3492642548,1007959276&fm=27&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=2485746451,675722233&fm=27&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=2680580465,1566771357&fm=27&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=1840240954,1945621149&fm=27&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=4234847178,752869050&fm=27&gp=0.jpg'
      ],
      [
        'http://img3.imgtn.bdimg.com/it/u=3322771450,3075457953&fm=27&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=3226119569,4290367030&fm=27&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2857185250,1402802973&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3014997601,910528203&fm=27&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=3615249198,993053135&fm=27&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3237716449,358376831&fm=27&gp=0.jpg'
      ],
      [
        'http://img0.imgtn.bdimg.com/it/u=1766844539,1501030357&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3896641597,2467895611&fm=27&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=3699956916,4137625401&fm=27&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=1963119844,45557625&fm=27&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2220978170,1904446079&fm=27&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3407749613,1067137609&fm=27&gp=0.jpg'
      ]
    ]
    const imgsTag = imgData.map(item1 => (
      item1.map(item2 => (
        <div className="gutter-box" key={item2}>
          <Card bordered={false} bodyStyle={{ padding: 0 }}>
            <div>
              <img onClick={() => this.openGallery(item2)} alt="example" width="100%" src={item2} />
            </div>
            <div className="pa-m">
              <h3>美女图片</h3>
            </div>
          </Card>
        </div>
      ))
    ));
    return (
      <div className="gallery">
       <Row type="flex" justify="space-around" align="middle">
          <Col className="gutter-row" md={4}>
              {imgsTag[0]}
          </Col>
          <Col className="gutter-row" md={4}>
              {imgsTag[1]}
          </Col>
          <Col className="gutter-row" md={4}>
              {imgsTag[2]}
          </Col>
          <Col className="gutter-row" md={4}>
              {imgsTag[3]}
          </Col>
          <Col className="gutter-row" md={4}>
              {imgsTag[4]}
          </Col>
        </Row>
        <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {this.pswpElement = div;} }>
            <div className="pswp__bg" />
            <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                  <div className="pswp__item" />
                  <div className="pswp__item" />
                  <div className="pswp__item" />
              </div>
              <div className="pswp__ui pswp__ui--hidden">
                  <div className="pswp__top-bar">
                      <div className="pswp__counter" />
                      <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                      <button className="pswp__button pswp__button--share" title="Share" />
                      <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                      <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                      <div className="pswp__preloader">
                          <div className="pswp__preloader__icn">
                              <div className="pswp__preloader__cut">
                                  <div className="pswp__preloader__donut" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                      <div className="pswp__share-tooltip" />
                  </div>
                  <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
                  <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
                  <div className="pswp__caption">
                      <div className="pswp__caption__center" />
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}