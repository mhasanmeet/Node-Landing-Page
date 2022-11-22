//index Route
exports.getIndex = (req, res) =>{
    res.render('pages/index', {
        title: `CodegNet: We Develop Software`
    })
}

//about Route
exports.getAbout = (req, res) => {
    res.render('pages/about', {
        title: `About Us`
    })
}

//Contact Route
exports.getContact = (req, res) => {
    res.render('pages/contact', {
        title: `Contact Us`
    })
}

//404 not found Route
exports.getNotfound = (req, res) => {
    res.render('pages/notfound', {
        title: `404 not found`
    })
}