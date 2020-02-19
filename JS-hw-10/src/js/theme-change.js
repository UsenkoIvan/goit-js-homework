import refs from './refs'


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeNow = localStorage.getItem('theme');
if (themeNow === Theme.DARK) {
  refs.theme.checked = true;
  refs.body.classList.add(Theme.DARK);
}
if (themeNow === Theme.LIGHT) {
  refs.theme.checked = false;
  refs.body.classList.add(Theme.LIGHT)
}

const handleChangeTheme = evt => {
  // console.log(evt.target.checked);
  if (evt.target.checked) {
    refs.body.classList.remove(Theme.LIGHT)
    refs.body.classList.add(Theme.DARK)

    localStorage.setItem('theme', Theme.DARK)
  };
  if (!evt.target.checked) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT)

    localStorage.setItem('theme', Theme.LIGHT)
  }
}

refs.theme.addEventListener('change', handleChangeTheme);
