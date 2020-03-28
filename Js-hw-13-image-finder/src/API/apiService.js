import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';
PNotify.defaults.delay = 2000;



const baseURL = 'https://pixabay.com/api/';

export default {
  query: '',
  page: 1,
  key: '15710234-8951b07a1d3bf1777c4958c43',

  fetchImages() {
    const reqestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`

    return fetch(baseURL + reqestParams)
      .then(res => res.json())
      .then(parsedResponse => {
        PNotify.success({
          text: "I'm OK."
        });
        this.incrementPage()
        return parsedResponse.hits
      })
      .catch(err => PNotify.error({
        text: "I'm trouble."
      }));
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    return this.query = string;
  },


  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  }
}
