import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import StateStore from '../stores/StateStore';
import { Redirect } from 'react-router-dom';
import * as StateActions from '../actions/StateActions';

import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

class ItemNumberSearchBar extends Component {
  constructor(){
    super();
    this.searchItemNumber = this.searchItemNumber.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.state={
      itemNumberSearchText: StateStore.getActiveItemNumber(),
      redirect: false
    }
  }

  searchItemNumber(event){
    event.preventDefault();
    let searchText = this.state.itemNumberSearchText.trim();
    if(searchText !== undefined){
      StateActions.setActiveItemNumber(this.state.itemNumberSearchText);
      this.setState({
        redirect: true
      })
    }
  }

  inputChanged(event){
    this.setState({itemNumberSearchText: event.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.searchItemNumber}>
        <FormGroup row="row">
          <Label for="item-number-txt" xs={4} md={3} lg={2} className='text-left'>Item Number:</Label>
          <Col xs={8} md={9} lg={10}>
            <InputGroup>
              <Input
                type='number'
                id='item-number-text'
                placeholder='Item Number'
                onChange={this.inputChanged}
                value={this.state.itemNumberSearchText}/>
              <InputGroupAddon addonType="append">
                <Button color="primary">
                  <FontAwesome name='search'/>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </FormGroup>
        {/* Used to update the Url when the user searches for an item number */}
        {
          this.state.redirect &&
          <Redirect to={StateStore.getActiveItemNumber()}/>
        }
      </Form>

    )
  }
}

export default ItemNumberSearchBar;
