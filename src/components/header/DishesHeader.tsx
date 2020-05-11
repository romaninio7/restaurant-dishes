import React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

import DishesSearchPanel from 'components/header/DishesSearchPanel';

const styles = {
  header: {
    minHeight: '200px',
    backgroundImage:
      'url(https://www.dorchestercollection.com/wp-content/uploads/Pairs-le-meurice-dali-header-1920x840.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '0 90%;',
    marginBottom: 40,
  },
  overlay: {
    zIndex: 2,
    background: '#f5b52791',
    minHeight: '200px',
    '-webkit-box-shadow': 'inset 0px -4px 16px -3px rgba(0,0,0,0.35)',
    '-moz-box-shadow': 'inset 0px -4px 16px -3px rgba(0,0,0,0.35)',
    'box-shadow': 'inset 0px -4px 16px -3px rgba(0,0,0,0.35)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

interface DishesHeaderProps extends WithStylesProps<typeof styles> {}

const DishesHeader: React.FunctionComponent<DishesHeaderProps> = ({
  classes,
}): JSX.Element => {
  return (
    <div className={classes.header}>
      <div className={classes.overlay}>
        <DishesSearchPanel />
      </div>
    </div>
  );
};

export default withStyles(styles)(DishesHeader);
