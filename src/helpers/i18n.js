import cookies from 'js-cookie';
import config from './config';
import locales from './locales';

/**
 * Set cookies if don't exists
 */
if (cookies.get(config.cookie.locale.name) === undefined) {
  const cookiesOptions = {
    expires: 365,
  };
  Cookies.set(config.cookie.locale.name, config.cookie.locale.default, cookiesOptions);
}

const options = {
  locale: cookies.get(config.cookie.locale.name) || config.cookie.locale.default,
};

class I18n {
  getKey(key, object) {
    let keys = key.split(/[\.\[\]]/);

    while (keys.length > 0) {
      var key = keys.shift();

      // Keys after array will be empty
      if (!key) {
        continue;
      }

      // Convert array indices from strings ('0') to integers (0)
      if (key.match(/^[0-9]+$/)) {
        key = parseInt(key);
      }

      // Short-circuit if the path being read doesn't exist
      if (!object.hasOwnProperty(key)) {
        return undefined;
      }
      object = object[key];
    }
    return object;
  }

  /**
  * Translate method
  * @return {[type]} [description]
  */
  t(key) {
    return this.getKey(key, locales[options.locale]);
  }

}

module.exports = new I18n();
