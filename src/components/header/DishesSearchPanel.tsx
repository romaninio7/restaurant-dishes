import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import withStyles, { WithStylesProps } from 'react-jss';

const styles = {
  search: {
    minWidth: 400,
    '-webkit-box-shadow': '0px 0px 29px 0px rgba(0,0,0,0.16)',
    '-moz-box-shadow': '0px 0px 29px 0px rgba(0,0,0,0.16)',
    'box-shadow': '0px 0px 29px 0px rgba(0,0,0,0.16)',
  },
  search__input: {
    backgroundColor: '#ffffffe6!important',
  },
};

interface DishesSearchPanelProps extends WithStylesProps<typeof styles> {
  setCurrentSearch: Function;
}

const DishesSearchPanel: React.FunctionComponent<DishesSearchPanelProps> = ({
  classes,
  setCurrentSearch,
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const searchOnChangeHandler = (e) => {
    setInputValue(e.target.value);
    setCurrentSearch(e.target.value);
  };
  return (
    <div
      className={`ui right aligned large category search ${classes.search} container`}
    >
      <div className='ui icon input fluid'>
        <input
          className={`prompt ${classes.search__input}`}
          type='text'
          placeholder='Search dishes by name or ingredient...'
          value={inputValue}
          onChange={(e) => searchOnChangeHandler(e)}
        />
        <i className='icon search'></i>
      </div>
    </div>
  );
};

export default connect(null, actions)(withStyles(styles)(DishesSearchPanel));
