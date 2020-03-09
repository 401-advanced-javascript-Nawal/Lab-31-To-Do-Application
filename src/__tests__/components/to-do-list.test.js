import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ToDoList from '../../modules/to-do-list.js';


describe ('<ToDoList />' , () => {

  it(' It Should be exists in our applications ', () => {
    // virtual 
    let app = shallow(<ToDoList />);
    // find the tag which already includes in our app 
    expect(app.find('p').exists()).toBeTruthy();
  }); // end of it test 

  it(' Renders correctly ' , () => {
    const tree = renderer.create(<ToDoList />).toJSON();
    expect(tree).toMatchSnapshot();
  }); // end of it test for render 

}); // end of describe test 