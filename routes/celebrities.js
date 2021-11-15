
const router = require("express").Router();
const Celebrity = require("../models/Celebrity");


router.get('/celebrity', (req, res, next) => {
	
	Celebrity.find()

		.then(celebFromDB => {
			console.log(celebFromDB)
			res.render('celebrities/index', { celeblist: celebFromDB })
		})
		.catch(err => next(err))
});


router.get('/celebrities/new', (req, res, next) => {

    res.render('celebrities/new')

});

router.post('/celebrities', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body
    // console.log(title, description, author, rating)

    // create a new book
    Celebrity.create({
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase,
    })
        .then(createdCeleb => {
            console.log(createdCeleb)
            
            res.redirect(`/celebrities/${createdCeleb._id}`)
        })
        
        .catch(err => next(err))
});

router.get('/celebrities/:id', (req, res, next) => {
	const id = req.params.id
	Celebrity.findById(id)
		.then(celebFromDB => {
			console.log(celebFromDB)
			res.render('celebrities/show', { celeblist: celebFromDB })
		})
		.catch(err => next(err))
});

router.get('/celebrities/delete/:id', (req, res, next) => {
	const id = req.params.id
	Celebrity.findByIdAndDelete(id)
		.then(() => {
			// redirect to the books list
			res.redirect('/celebrity')
		})
		.catch(err => {
			next(err)
		})
});


module.exports = router;