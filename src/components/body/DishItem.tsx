import React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { IDishesList, IIngredients } from 'interfaces';
import * as consts from 'consts';

const styles = {
  card: {
    width: '270px!important',
  },
  card__imageblock: {
    overflow: 'hidden',
    height: 190,
  },
  card__image: {
    height: '100%!important',
  },
  card_separator: {
    opacity: 0.5,
  },
};
interface DishItemProps extends IDishesList, WithStylesProps<typeof styles> {}

const DishItem: React.FunctionComponent<DishItemProps> = ({
  classes,
  name,
  ingredients,
}): JSX.Element => {
  const renderIngredientsList = (): JSX.Element[] => {
    return ingredients.map((ingredient: IIngredients, index) => {
      return (
        <div className='item' key={index}>
          <i className='right triangle icon'></i>
          <div className='content'>
            <strong>{ingredient.weight} g</strong>&nbsp;
            <span className={classes.card_separator}>of</span>&nbsp;
            <span>{ingredient.name}</span>
          </div>
        </div>
      );
    });
  };

  const getSumInGrammes = () => {
    return ingredients.reduce(
      (sum, current: IIngredients) => sum + Number(current.weight),
      0
    );
  };

  return (
    <div className={`card ${classes.card}`}>
      <div className={`image ${classes.card__imageblock}`}>
        <img
          src={consts.getRandomDishURL()}
          alt='cool dish'
          className={`${classes.card__image}`}
        />
      </div>
      <div className='content'>
        <div className='header'>{name}</div>
        <div className='meta'>
          <span>Total weight: </span>
          <strong>{getSumInGrammes()} g</strong>
        </div>
        <div className='description'>
          <div className='ui list'>{renderIngredientsList()}</div>
        </div>
      </div>
      <div className='extra content'>
        <span className='left floated like'>
          <i className='like icon'></i>
          Like
        </span>
        <span className='right floated star'>
          <i className='star icon'></i>
          Favorite
        </span>
      </div>
    </div>
  );
};

export default withStyles(styles)(DishItem);
