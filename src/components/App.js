import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts : []
    }
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    gifts.push({ id: max_number(ids) + 1 });

    this.setState({
      gifts
    });
  }

  removeGift = (id) => {
    const gifts = this.state.gifts.filter(g => g.id !== id);
    this.setState({
      gifts
    });
  }

  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
        {
          gifts.map(gift => {
            return (
              <Gift 
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              />
            )
          })
        }
        </div>
        <Button 
          className="btn-add"
          onClick={this.addGift}
        >
          Add gift
        </Button>
      </div>
    )
  }
}

export default App;