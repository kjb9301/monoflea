import React, { Component } from 'react';
import styles from './ClassCategoryBtn.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

class ClassCategoryBtn extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.categories.length !== this.props.categories.length;
  }

  render() {
    const { categories, getSpecificClassList } = this.props;
    let lists = categories.map(category => {
      const { class_category_id, category_name, category_ko_name } = category;
      return (
        <Button 
          key={class_category_id}
          onHandleParams={category_name}
          toGetData={getSpecificClassList}
        >
          {category_ko_name}
        </Button>
      );
    });

    lists.unshift(<Button key='All' toGetData={getSpecificClassList}>전체</Button>);

    return (
      <div>
        {lists}
      </div>
    );
  }
}

export default ClassCategoryBtn;