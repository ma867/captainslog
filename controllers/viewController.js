const RESOURCE_PATH = '/logs'

//only for views which we only got four
// this is an object literal but you can also make a controller class and pass these functions as an argument and make a n object out of the class

const viewController = {
    index(req, res, next){
        res.render('logs/Index', res.locals.data)
    },
    new(req, res, next){
        res.render('logs/New')
    },
    edit(req, res, next){
        res.render('logs/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('logs/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.log.id}`)
    }

}

module.exports = viewController