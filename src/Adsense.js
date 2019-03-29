import React from 'react';

class Adsense extends React.Component {

  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return(
     <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-9324877756777261'
          data-ad-slot='8016227565'
          data-ad-format='auto'
          data-full-width-responsive="true" />
    )
  }
}

export default Adsense;