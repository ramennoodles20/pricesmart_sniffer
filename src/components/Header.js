import React, {Component} from 'react';
import StateStore from '../stores/StateStore'
import * as StateActions from '../actions/StateActions';
import Flag from 'react-world-flags';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '../public/css/App.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
    this.selectMode = this.selectMode.bind(this);
    this.selectClub = this.selectClub.bind(this);
    this.getLangChange = this.getLangChange.bind(this);
    this.state = {
      isOpen: false,
      langOptions:  StateStore.getLangOptions(),
      mode: 'F',
      clubs: [
        {
          name: 'Escazú',
          code: '6401',
          country: 'Costa Rica'
        },
        {
          name: 'Alajuela',
          code: '6402',
          country: 'Costa Rica'
        }
      ],
      club: {
        name: 'Escazú',
        code: '6401',
        country: 'Costa Rica'
      }
    };
  }

  componentWillMount(){
    StateStore.on("change", this.getLangChange)
  }

  componentWillUnmount(){
    StateStore.removeListener("change", this.getLangChange);
  }

  getLangChange(){
    this.setState({
      langOptions:  StateStore.getLangOptions()
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  selectLanguage(event) {
    StateActions.setActiveLang(event.target.value);
  }

  selectMode(event) {
    this.setState({mode: event.target.value});
  }

  selectClub(name, code, country) {
    this.setState({
      club: {
        name: name,
        code: code,
        country: country
      }
    });
  }

  render() {
    return (<div className="Header">
      <Navbar color="light" light="light" expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">
          <Nav className="ml-auto" navbar="navbar">
            <UncontrolledDropdown nav="nav" inNavbar="inNavbar">
              <DropdownToggle nav="nav" caret="caret">
                {this.state.langOptions.activeLanguage}
              </DropdownToggle>
              <DropdownMenu right>
                {
                  this.state.langOptions.langList.map(
                    (langItem) =>
                    <DropdownItem onClick={this.selectLanguage} value={langItem.code}>
                      {langItem.name}
                    </DropdownItem>
                  )
                }
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav="nav" inNavbar="inNavbar">
              <DropdownToggle nav="nav" caret="caret">
                Mode: {this.state.mode}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={this.selectMode} value='F'>
                  F
                </DropdownItem>
                <DropdownItem onClick={this.selectMode} value='G'>
                  G
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav="nav" inNavbar="inNavbar">
              <DropdownToggle nav="nav" caret="caret">
                <Flag code="cri" height="12" /> {this.state.club.name}, {this.state.club.country}
              </DropdownToggle>
              <DropdownMenu right>
                {
                  this.state.clubs.map((club) =>
                    <DropdownItem
                      onClick={() => this.selectClub(club.name, club.code, club.country)}>
                      {club.name}
                    </DropdownItem>
                  )
                }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    )
  }
}

  export default Header;
