import Icon from '../img/clipboard-list.svg';

const header = function() {
  const siteHeader = document.createElement('header');

  const siteIcon = document.createElement('img');
  siteIcon.src = Icon;
  siteIcon.id = "site-icon";
  const logoContainer = document.createElement('div');
  logoContainer.id = "logo-container";
  const logoFirst = document.createElement('span');
  logoFirst.innerHTML = "Chek";
  logoFirst.id = "logo-first";
  const logoSecond = document.createElement('span');
  logoSecond.innerHTML = "List"
  logoSecond.id = "logo-second";
  const logoMotto = document.createElement('div');
  logoMotto.id = "logo-motto-container";
    const logoWord1 = document.createElement('span');
    logoWord1.innerHTML = "Getting "
    const logoWord2 = document.createElement('span');
    logoWord2.innerHTML = " it "
    const logoWord3 = document.createElement('span');
    logoWord3.innerHTML = " done ";
    const logoWord4 = document.createElement('span');
    logoWord4.innerHTML = " together";
    logoMotto.append(logoWord1, logoWord2, logoWord3, logoWord4);

  logoContainer.append(logoFirst, logoSecond, logoMotto);

  siteHeader.append(siteIcon, logoContainer);
  
  return siteHeader;
}

export default header;