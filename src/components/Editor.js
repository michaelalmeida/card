import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import Context from '../Context';
import Export from '../Export';

import "react-datepicker/dist/react-datepicker.css";
import './Editor.scss';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <section className="editor">
            <label>Título:
            <input type="text" name="title" onChange={context.handleChange} value={context.title} />
            </label>
            <label>Subtítulo:
            <input type="text" name="subtitle" onChange={context.handleChange} value={context.subtitle} />
            </label>
            <label>Conteúdo:
          <textarea
                name="content"
                type="text"
                value={context.content}
                onChange={context.handleChange}
              />
            </label>
            <label>Data:
          <DatePicker
                selected={new Date(context.dateObject)}
                onChange={context.handleDate}
                dateFormat="dd/MM/yyyy" />
            </label>
            <label>Horário:
            <input type="text" name="hour" onChange={context.handleChange} value={context.hour} maxLength="5" />
            </label>
            <label>WhatsApp:
            <input type="text" name="whatsapp" onChange={context.handleChange} value={context.whatsapp} />
            </label>
            <label>Telefone:
            <input type="text" name="phone" onChange={context.handleChange} value={context.phone} />
            </label>
            <label>E-mail:
            <input type="text" name="email" onChange={context.handleChange} value={context.email} />
            </label>
            <label>Endereço:
            <input type="text" name="adress" onChange={context.handleChange} value={context.adress} />
            </label>
            <Export /> <button className="btn btn-secondary" onClick={context.clearFields}>Limpar campos</button>
          </section>
        )}
      </Context.Consumer>
    )
  }
}

export default Editor;