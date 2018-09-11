import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ClassPost from 'components/class/ClassPost';

import * as classActions from 'store/modules/class';
import * as classUIActions from 'store/modules/classUI';

const bodyData = new FormData();

class ClassPostContainer extends Component {

  getClassCategory = async () => {
    const { ClassActions } = this.props;
    await ClassActions.getClassCategory();
  }

  postNewClass = async () => {
    const { ClassActions, nickName, history } = this.props;
    bodyData.set('nickName', nickName);
    try {
      const newClass = await ClassActions.postNewClass(bodyData);
      const { isSaved, message } = newClass.data;
      if(isSaved) {
        alert(message);
        return history.push('/classes');
      }
    } catch(e) {
      const { isSaved, message } = e.response.data;
      if(!isSaved) return alert(message);
    }
  }

  changeValue = (e) => {
    const { name, value, files } = e.target;
    const { ClassUIActions } = this.props;
    files ? bodyData.append(name, files[0]) : bodyData.set(name, value);
    ClassUIActions.changeClassInfo({ name, value });
  }

  componentDidMount() {
    this.getClassCategory();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.categories !== nextProps.categories;
  }

  render() {
    const { categories } = this.props;
    const { changeValue, postNewClass } = this;
    if(!Number.isInteger(categories.length)) return null;
    return (
      <div>
        <ClassPost
          categories={categories}
          changeValue={changeValue}
          postNewClass={postNewClass}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    nickName: state.base.get('nickName'),
    categories: state.class.get('categories'),
    class_category: state.classUI.getIn(['classInfo', 'class_category']),
    class_name: state.classUI.getIn(['classInfo', 'class_name']),
    class_place: state.classUI.getIn(['classInfo', 'class_place']),
    event_date: state.classUI.getIn(['classInfo', 'event_date']),
    recruit_start_date: state.classUI.getIn(['classInfo', 'recruit_start_date']),
    recruit_end_date: state.classUI.getIn(['classInfo', 'recruit_end_date']),
    class_limit_cnt: state.classUI.getIn(['classInfo', 'class_limit_cnt']),
    class_desc: state.classUI.getIn(['classInfo', 'class_desc']),
    class_img1: state.classUI.getIn(['classInfo', 'class_img1']),
    class_img2: state.classUI.getIn(['classInfo', 'class_img2']),
    class_img3: state.classUI.getIn(['classInfo', 'class_img3']),
    class_img4: state.classUI.getIn(['classInfo', 'class_img4']),
    class_img5: state.classUI.getIn(['classInfo', 'class_img5']),
  }),
  (dispatch) => ({
    ClassActions: bindActionCreators(classActions, dispatch),
    ClassUIActions: bindActionCreators(classUIActions, dispatch)
  })
)(withRouter(ClassPostContainer));