import {MDCRipple} from '@material/ripple';
import {MDCList} from '@material/list';

const list = new MDCList(document.querySelector('.mdc-list'));
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));