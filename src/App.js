import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Context from './Context';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Escreva um titulo...',
      subtitle: 'Escreva um subtitulo...',
      content: 'Escreva o conteúdo...',
      date:  new Date().toLocaleDateString(),
      dateObject: new Date().toString(),
      hour: '19h',
      whatsapp: '(19) 123456789',
      phone: '(19) 12345678',
      email: 'exemplo@exemplo',
      adress: 'Rua Exemplo, nº 13' 
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDate = date => {
    if (date !== null ) {
      var stringDate = date.getDate().toString() + "/" + (date.getMonth() +1).toString() + "/" + date.getFullYear().toString();
      var stringDateObject = date.toString();
      this.setState({date: stringDate, dateObject: stringDateObject});
    }
  }

  clearFields = () => {
    this.setState(
      {
      title: '',
      subtitle: '',
      content: '',
      date: '',
      hour: '',
      whatsapp: '',
      phone: '',
      email: '',
      adress: '' 
      }
    );
  }
  

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home}/> 
        <Context.Provider value={{
          title: this.state.title,
          subtitle: this.state.subtitle,
          content: this.state.content,
          date: this.state.date,
          dateObject: this.state.dateObject,
          hour: this.state.hour,
          whatsapp: this.state.whatsapp,
          phone: this.state.phone,
          email: this.state.email,
          adress: this.state.adress,
          handleChange: this.handleChange,
          clearFields: this.clearFields,
          handleDate: this.handleDate
        }}>
          <Route path="/card/:card" component={Card}/>
        </Context.Provider>
        <Route path="/" component={Footer}/> 
      </BrowserRouter>
    );
  }
}

export default App;
