import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout( {children} ) {
  return (
    <React.Fragment>
       <Header/>
       <div>
           {children}
       </div>
       <Footer />
    </React.Fragment>
  )
}

export default Layout
