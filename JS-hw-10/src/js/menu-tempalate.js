import refs from './refs';
import menu from '../menu';
import foodItem from '../templates/food-item.hbs';




const drowToHtml = items => {
  const markup = items.map(item => foodItem(item)).join(' ');
  refs.menuTemplate.insertAdjacentHTML('beforeend', markup);
};

drowToHtml(menu);
