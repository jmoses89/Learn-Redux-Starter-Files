import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({

  render() {
    const { post, i, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img className="grid-photo" src={post.display_src} alt={post.caption}/>
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
          <figcaption>
            <p>
              {post.caption}
              <div className="control-buttons">
                <button className="likes">&hearts; {post.likes}</button>
                <Link className="button" to={`/view/${post.code}`}>
                  <span className="speech-bubble"></span>
                  { comments[post.code] ? comments[post.code].length : 0}
                </Link>
              </div>
            </p>
          </figcaption>
        </div>
      </figure>
    );
  }
})

export default Photo;
