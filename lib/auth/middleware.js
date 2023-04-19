module.exports =  function(req, res, next) {
    if(req.headers.authorization) {
        let token = req.headers.authorization.replace("Basic ", '');
        let bufferBase64 = new Buffer.from(token, 'base64');
        let bufferString = bufferBase64.toString();
        let responseArray = bufferString.split(':');
        let key = responseArray[0];
        let value = responseArray[1];
        if(key === process.env.BUSINESS_API_KEY && value === process.env.BUSINESS_API_VALUE) {
            next()
        }else {
            res.status(401).json({success: false, message: 'Invalid authorization key'})
        }

    }else {
        res.status(401).json({success: false, message: 'Authorization key missing'})
    }
    
}