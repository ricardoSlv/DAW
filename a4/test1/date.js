exports.myDateTime = function () {
    const d = new Date()
    return d.toISOString().substring(0, 16)
}

exports.myName = 'Ricardo'
