import React, { PureComponent } from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const { info } = this.props;
    // const displayName = `${info.domain},\n${info.city},${info.ipAddress}`;
    const displayName =
      <div>
        <p><strong>{info.domain}</strong><br />
          {info.city}, {info.state}, {info.country}
          {/* <br />{info.ipAddress} */}
          </p>
      </div>;


    return (
      <div>
        <div>
          {displayName}
          <a target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}>
            Wikipedia
          </a>
        </div>
        <img width={240} src={info.image} />
      </div>
    );
  }
}
