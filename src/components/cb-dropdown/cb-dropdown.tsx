import { Component, Host, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'cb-dropdown',
  styleUrl: 'cb-dropdown.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class CbDropdown {
  @Prop({ mutable: true, reflect: true }) dataSource: Array<object> = [];

  // @Prop() defaultMessage: string = '';
  @State() hidden: boolean = true;
  @State() data: Array<object> = [];
  @State() active: boolean = false;

  element!: HTMLInputElement;
  el: HTMLElement;

  @Method() async getSelectedData() {
    return this.element.value;
  }

  searchOption() {
    this.hidden = false;
    this.data = this.dataSource;
    if (this.element.value.trim() == '') {
      return (this.data = this.dataSource);
    } else {
      this.data = this.dataSource;
      return (this.data = this.data.filter(x => x['name'].toLowerCase().match(this.element.value.toLowerCase())));
    }
  }

  selectOption(item) {
    this.element.value = item.name;
    this.hidden = true;
  }

  hideOption() {
    this.hidden = true;
  }

  SelectView(items: any) {
    let options = '';
    if (items.length > 0) {
      options = (
        <div hidden={this.hidden} class="selectContent">
          {items.map(item => (
            <div class="optionContainer">
              <a class={'option-' + item.id} id={'option-' + item.id} onClick={() => this.selectOption(item)}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      );
    } else {
      options = (
        <div hidden={this.hidden}>
          <div class="optionContainer">
            <a>Nothing match</a>
          </div>
        </div>
      );
    }
    return options;
  }

  componentWillLoad() {
    this.data = this.dataSource;
  }

  render() {
    let content = (
      <div class="">
        <div id="myDropdown" class="dropdown-content" ref={el => (this.el = el)}>
          <input
            type="text"
            placeholder="Search.."
            id="myInput"
            ref={el => (this.element = el as HTMLInputElement)}
            onKeyUp={() => this.searchOption()}
            onFocus={() => this.searchOption()}
          />
          {this.SelectView(this.data)}
        </div>
      </div>
    );

    return <Host>{content}</Host>;
  }
}
