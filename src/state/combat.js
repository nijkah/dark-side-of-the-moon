import { Component } from 'geotic';

export class Defense extends Component {
    static properties = { max: 1, current: 1 };
}

export class Health extends Component {
    static properties = { max: 10, current: 10 };
    onTakeDamage(evt) {
        this.current -= evt.data.amount;
        evt.handle();
    }
}

export class Power extends Component {
    static properties = { max: 5, current: 5 };
}