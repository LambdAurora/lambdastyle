Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/components/';

[...document.querySelectorAll('pre.example-code')].filter(e => e.getAttribute('language') != null).forEach(e => {
  let language = e.getAttribute('language');
  if (language === 'html' && e.getAttribute('render_target') != null)
    document.querySelector(e.getAttribute('render_target')).innerHTML = e.innerHTML;
  e.innerHTML = `<code>${Prism.highlight(e.innerHTML, Prism.languages.html, 'html')}</code>`;
  e.classList.add(`language-${language}`);
});
