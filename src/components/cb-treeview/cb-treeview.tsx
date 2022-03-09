import { Component, h, Method, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'cb-treeview',
  styleUrl: 'cb-treeview.css',
  shadow: true,
})
export class CbTreeview {
  rootElement: HTMLElement;

  @Prop({ mutable: true, reflect: true }) dataSource: Array<object> | string = [];

  @State() data: Array<object> = [];

  @Watch('dataSource')
  dataSourceChanged(newValue: [] | string, oldValue: []) {
    if (newValue !== oldValue) {
      if (typeof newValue === 'string') {
        this.data = JSON.parse(newValue);
      } else {
        this.data = newValue;
      }
      console.log('dataSource changed');
    }

    console.log('Componenet Props ');
  }

  @Method() async getCheckedData() {
    let array = [];
    let checkboxes = this.rootElement.querySelectorAll('input[type=checkbox]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
      array.push({ id: (checkboxes[i] as HTMLInputElement).value, name: (checkboxes[i] as HTMLInputElement).name });
    }
    return array;
  }

  showChildrenChecks = childCheks => {
    for (var i = 0; i < childCheks.length; i++) {
      childCheks[i]['checked'] = true;
    }
  };

  hideChildrenChecks = childCheks => {
    for (var i = 0; i < childCheks.length; i++) {
      childCheks[i]['checked'] = false;
    }
  };

  clickCheckBox = id => {
    let listElement = this.rootElement.querySelector('.checkbox-' + id).closest('li');
    let checkboxes = listElement.getElementsByTagName('input');
    let currentCheckBox = this.rootElement.querySelector('.checkbox-' + id);
    if (currentCheckBox['checked']) {
      this.showChildrenChecks(checkboxes);
    } else {
      this.hideChildrenChecks(checkboxes);
    }
  };

  toggleClass(id) {
    let listElement = this.rootElement.querySelector('.li-' + id).children[3];
    let buttonElement = this.rootElement.querySelector('.li-' + id).children[0];

    if (listElement.classList.contains('hide')) {
      buttonElement.textContent = '-';
    } else {
      buttonElement.textContent = '+';
    }
    listElement.classList.toggle('hide');
  }

  TreeView(items: any, isParent = true) {
    return (
      <ul class={isParent ? '' : 'hide'}>
        {items.map(item => (
          <li id={'li-id-' + item.id} class={'li-' + item.id}>
            <button type="button" class={item.children.length > 0 ? '' : 'hide'} id={'btn-' + item.id} onClick={() => this.toggleClass(item.id)}>
              +
            </button>
            <input type="checkbox" name={item.name} id={item.id} value={item.id} class={'checkbox-' + item.id} onClick={() => this.clickCheckBox(item.id)}></input>
            <label htmlFor={item.id}>{item.name} </label>

            {item.children.length > 0 ? this.TreeView(item.children, false) : ''}
          </li>
        ))}
      </ul>
    );
  }

  componentWillLoad() {
    console.log('Componenet will load ');
    console.log(typeof this.dataSource);
    console.log(Array.isArray(this.dataSource) + ' type');
    if (typeof this.dataSource === 'string') {
      console.log('parse done');
      this.data = JSON.parse(this.dataSource);
      console.log(Array.isArray(this.data) + ' type');
    } else {
      console.log('no parse  done');
      this.data = this.dataSource;
    }
  }

  componentDidLoad() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  render() {
    let content = '';
    if (Array.isArray(this.data) && this.data.length > 0) {
      content = this.TreeView(this.data);
    } else {
      console.log(this.dataSource.length);
      content = <p>No Data available</p>;
    }
    return <div ref={el => (this.rootElement = el)}>{content}</div>;
  }
}
