const buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON()); // data: [...] is unicode character set 

buf.write('wo');
console.log(buf.toString());