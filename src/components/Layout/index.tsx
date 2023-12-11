import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import type { MetaConfigProps } from './MetaConfig';
import MetaConfig from './MetaConfig';

type Props = {
  children: React.ReactNode;
  metaConfig: MetaConfigProps;
  fullWidth?: boolean;
};

const Layout: React.FC<Props> = ({ children, metaConfig, fullWidth = false }) => {
  return (
    <div>
      <MetaConfig {...metaConfig} />
      <div className={`wrapper font-sans`}>
        <Header fullWidth={fullWidth} />
        <main
          className={`m-auto flex-grow w-full transition-all max-w-6xl px-4 ${
            fullWidth && 'px-4 md:px-24'
          }py-10`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
