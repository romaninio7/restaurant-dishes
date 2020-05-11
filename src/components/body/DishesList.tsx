import React, { useEffect, useState } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { connect } from 'react-redux';
import { IDishesState, IStore } from 'interfaces';
import _ from 'lodash';

import Loader from 'components/helpers/Loader';
import Error from 'components/helpers/Error';
import DishItem from 'components/body/DishItem';
import * as actions from 'actions';

const styles = {
  cards: {
    display: 'flex',
    justifyContent: 'center',
  },
};

interface DishesListProps extends IDishesState, WithStylesProps<typeof styles> {
  fetchDishes: Function;
  currentSearch: string;
}

const DishesList: React.FunctionComponent<DishesListProps> = ({
  classes,
  fetchDishes,
  fetching,
  dishes,
  error,
  currentSearch,
}): JSX.Element => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom && !fetching) {
      fetchDishes();
    }
  }, [isBottom]);

  const handleScroll = (): void => {
    if (
      document.documentElement.scrollTop + 400 >
      document.documentElement.scrollHeight -
        document.documentElement.offsetHeight
    ) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  const renderDishesList = (): JSX.Element[] => {
    const filteredDishes = currentSearch
      ? dishes.filter((dish) => {
          let nameCondition = dish.name
            .toLowerCase()
            .includes(currentSearch.toLowerCase().trim());

          let ingredientCondition = dish.ingredients
            .map((item) => item.name)
            .join('')
            .toLowerCase()
            .includes(currentSearch.toLowerCase().trim());

          return nameCondition || ingredientCondition;
        })
      : dishes;
    return filteredDishes.map((dish, index) => {
      return <DishItem key={index} {...dish} />;
    });
  };
  let bottomContent: JSX.Element = <br />;
  if (error) {
    bottomContent = <Error>{error}</Error>;
  }

  if (fetching) {
    bottomContent = <Loader round />;
  }

  return (
    <>
      <div className={`ui link cards ${classes.cards}`}>
        {renderDishesList()}
      </div>
      <div>{bottomContent}</div>
    </>
  );
};

interface IMapStateToProps extends IDishesState {
  currentSearch: string;
}

const mapStateToProps = (state: IStore): IMapStateToProps => {
  return {
    fetching: state.dishesState.fetching,
    dishes: state.dishesState.dishes,
    error: state.dishesState.error,
    currentSearch: state.currentSearch,
  };
};

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(DishesList));
