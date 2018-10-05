import React, { Component } from 'react';
import Button from 'components/common/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import * as sellerActions from 'store/modules/seller';

class CategoryButton extends Component {
  getSellersList = (category,like) => {
    const { SellerActions } = this.props;
    SellerActions.setCategory(category);
    SellerActions.getSellersList(category,like);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.categories.length !== this.props.categories.length;
  }

  render() {
    const { categories } = this.props;
    const { getSellersList } = this;
    const categoryList = categories.map(
      (categoryItem) => {
        const { category_id, category_ko, category } = categoryItem;
          return <Button
            key={category_id}
            onHandleParams={category}
            toGetData={getSellersList}
          > {category_ko}
          </Button>
      } 
    )
    categoryList.unshift(<Button
                            key={'Like'}
                            anotherOnHandleParams='like'
                            toGetData={getSellersList}> 좋아요</Button>)
    categoryList.unshift(<Button 
                            key={'All'} 
                            toGetData={getSellersList} >전체</Button>);
    return (
      <div>
        {categoryList}
      </div>
    );
  }
}

export default connect((state) => ({
  categories : state.seller.get('categories'),
 }),
(dispatch) => ({
  SellerActions : bindActionCreators(sellerActions,dispatch),
 })
)(CategoryButton);