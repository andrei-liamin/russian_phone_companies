import React, { Component } from 'react';
import './App.css';

class RBB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [
        {
          name: 'мтс',
          description: 'Публичное акционерное общество «Мобильные ТелеСистемы» (ПАО «МТС»)',
          img: '/img/mts.png'
        },
        {
          name: 'мегафон',
          description: 'ПАО «МегаФон» — общероссийский оператор связи',
          img: '/img/megafon.png'
        },
        {
          name: 'билайн',
          description: 'ПАО «ВымпелКом» (бренд «Билайн») входит в группу компаний VEON Ltd',
          img: '/img/beeline.jpg'
        },
        {
          name: 'теле2',
          description: 'Российская телекоммуникационная компания, основанная шведской группой компаний Tele2 AB',
          img: '/img/tele2.png'
        },
      ],
      outputName: '',
      descript: '',
      imageLogo: '',
      element: function () {

      }
    };

    //this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt) {
    let outputName = evt.target.value;
    let descript = '';
    let imageLogo = '';

    for (let i = 0; i < this.state.companies.length; i++) {
      if (outputName === this.state.companies[i].name) {
        descript = this.state.companies[i].description;
        imageLogo = this.state.companies[i].img;
        break;
      } else if (outputName !== '') {
        descript = 'нет такой компании';
        imageLogo = '';
      }
    }

    this.setState({
      outputName: outputName,
      descript: descript,
      imageLogo: imageLogo,
    });
  }

  render() {
    return (
      <div className="App">
        <div>Введите название оператора своего мобильного телефонного номера</div>
        <input
          type="text"
          placeholder="Input name of one russian rap battle league"
          onInput={(evt) => this.handleInput(evt)}
        />
        <p />{this.state.outputName}
        <p />{this.state.descript}
        <p /><img src={this.state.imageLogo} alt="" height="300" />
      </div>
    );
  }
}

export default RBB;