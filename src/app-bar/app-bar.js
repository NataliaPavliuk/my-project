import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const list = document.querySelector('.mdc-drawer .mdc-list');
const mainContent = document.querySelector('.main-content');
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

list.addEventListener('click', (event) => {
  mainContent.querySelector('input, button').focus();
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContent.querySelector('input, button').focus();
});