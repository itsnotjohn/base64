(() => {
    const encode = (string) => {
        return Buffer.from(string).toString('base64');
    }

    const decode = (string) => {
        return Buffer.from(string, 'base64').toString('ascii');
    }

    console.log(encode('hello'), decode(encode('hello')));
})()
