var slugify = require('slugify')


function slug(slug) {
    return slugify(slug, {
        replacement: '-', 
        remove: undefined,
        lower: true,
        strict: false,
        locale: 'tr_TR',
        trim: true
    });
}


function fulldate() {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return (
      year +
      "." +
      month +
      "." +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  }

  module.exports = {fulldate, slug};