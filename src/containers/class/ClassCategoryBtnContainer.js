import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'components/common/Button';

import * as classActions from 'store/modules/class';

class ClassCategoryBtnContainer extends Component {

  getSpecificClassList = async (category) => {
    const { ClassActions } = this.props;
    if(this.props.category !== category) {
      ClassActions.toggleMoreState(true);
      ClassActions.setCategory(category);
      return await ClassActions.getClassList(category);
    }
    return ClassActions.toggleMoreState(false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.categories.length !== this.props.categories.length;
  }

  render() {
    const { categories } = this.props;
    const { getSpecificClassList } = this;
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

export default connect(
  (state) => ({
    categories: state.class.get('categories'),
    category: state.class.get('category'),
  }),
  (dispatch) => ({
    ClassActions: bindActionCreators(classActions, dispatch)
  })
)(ClassCategoryBtnContainer);