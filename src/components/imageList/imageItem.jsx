import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Image from 'react-image';
import Spinner from '../Common/Spinner/Spinner';
import styles from './imageList.scss';
import PropTypes from 'prop-types';

class ImageItem extends Component {
  render() {
    const { urls, user, likes } = this.props.item;
    return (
        <Col sm={12} md={4}>
          <div styleName="imageWrapper">
            <div styleName="imageIneer">
              <div styleName="imageInner__herat">
                <div>
                  <FontAwesome styleName="heart" size="3x" name="heart"/>
                </div>
                <div styleName="likeText">{likes}</div>
              </div>
            </div>
            <Image src={urls.regular} loader={<Spinner />}/>
          </div>
          {user.name}
        </Col>
    );
  }
}

ImageItem.propTypes = {
  item: PropTypes.object
};

export default CSSModules(ImageItem, styles);
