const fs = require('fs')
const pdf = require('html-pdf')
const path = '/home/vitor/Downloads/cupons/'

const options = { format: 'Letter' };

fs.readdir(path, function(err, items) {
  for (var i=0; i<items.length; i++) {
    // console.log(`${path}${items[i]}`);

    let html = fs.readFileSync(`${path}/${items[i]}`, 'utf8')

    pdf.create(html, options).toFile(`./pdfs/Cupom ${i}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
  }
})