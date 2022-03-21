import { Component, Host, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'cb-jsonformatter',
  styleUrl: 'cb-jsonformatter.css',
  shadow: true,
})
export class CbJsonformatter {
  @Prop() rows: number = 4;
  @Prop() cols: number = 50;

  @Prop({ mutable: true, reflect: true }) dataSource: Array<object> | object | string = [];

  @State() data: Array<object> | object;

  @Watch('dataSource')
  dataSourceChanged(newValue: {} | string, oldValue: {}) {
    if (newValue !== oldValue) {
      if (typeof newValue === 'string') {
        this.dataSource = JSON.parse(newValue);
      } else {
        this.dataSource = newValue;
      }
      console.log('dataSource changed');
    }
    console.log('Componenet Props ');
  }

  componentWillLoad() {
    console.log('Componenet will load ');
    console.log(typeof this.dataSource);
    if (typeof this.dataSource === 'string') {
      console.log('parse done');
      this.data = JSON.parse(this.dataSource);
    }
  }
  componentWillUpdate() {
    console.log('Component Update');
  }

  handleChange(event) {
    let data = event.target.value;
    console.log(typeof data);
    if (typeof data === 'string') {
      this.data = JSON.parse(data);
    }
  }

  render() {
    return (
      <Host>
        <textarea name="textarea" rows={this.rows} cols={this.cols} onKeyUp={event => this.handleChange(event)}>
          {JSON.stringify(this.data, null, 2)}
        </textarea>
      </Host>
    );
  }
}
