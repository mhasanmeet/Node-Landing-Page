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