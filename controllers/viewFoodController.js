const RESOURCE_PATH = '/foods'

//only for views which we only got four
// this is an object literal but you can also make a controller class and pass these functions as an argument and make a n object out of the class

const viewFoodController = {
    index(req, res, next){
        res.render('foods/Index', res.locals.data)
    },
    new(req, res, next){
        res.render('foods/New')
    },
    edit(req, res, next){
        res.render('foods/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('foods/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.food.id}`)
    }

}

module.exports = viewFoodController