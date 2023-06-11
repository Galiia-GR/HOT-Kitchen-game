import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const footer = document.getElementsByTagName('footer');
if (footer && footer[0]) {
    footer[0].innerHTML = `  <a href="https://rs.school/js/" target="_blank">
    <img
      src="./rs_school_js.svg"
      width="114"
      height="42"
      alt="RS School"
    />
  </a>
  <p>
2023 by Galiia-GR<a
      href="https://github.com/Galiia-GR"
      target="_blank"
    >
      <img src="./github.svg" width="32" height="32" alt="github"
    /></a>
  </p>
    <p class="copyright">Copyright <a href="https://newsapi.org">NewsAPI</a></p>`;
}
