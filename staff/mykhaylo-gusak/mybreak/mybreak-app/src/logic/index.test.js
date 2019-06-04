import logic from './index.js'
import dataApi from '../data/dataApi/index.js'
const { mongoose, models: { User, Product, Order } } = require('mybreak-data');

const url = 'mongodb://localhost/test-mybreak-app';

describe('logic', () => {
    let userData, name, surname, email, password, age

    beforeAll(() => mongoose.connect(url, { useNewUrlParser: true }))

    beforeEach(async () => {
        await User.deleteMany()
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}`
        password = `password-${Math.random()}`
        age = Math.random()

        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        sessionStorage.clear()

    })


    describe('create', () => {
        it('should succed on corrrect user data', async () => {
            const response = await logic.registerUser(name, surname, email, password, age)
            expect(response).toBeUndefined()

            const user = await User.findOne({ email }).lean()
            expect(user).toBeDefined()
            expect(user.name).toEqual(name)
            expect(user.surname).toEqual(surname)
            expect(user.email).toEqual(email)
            expect(user.password).toEqual(password)
            expect(user.age).toEqual(age)
            expect(user.card).toEqual([])
            expect(user.orders).toEqual([])
        })


    })

    describe('login user', () => {

        beforeEach(async () => {
            await User.create({ email, password, name, surname, age })

        })

        it('should succed on corrrect user data', async () => {
            const user = await User.findOne({ email }).lean()
            expect(user).toBeDefined()

            expect(user.name).toEqual(name)
            expect(user.surname).toEqual(surname)
            expect(user.email).toEqual(email)
            expect(user.password).toEqual(password)
            expect(user.age).toEqual(age)
            expect(user.card).toEqual([])
            expect(user.orders).toEqual([])

            const response = await logic.loginUser(email, password)
            expect(response).toBeUndefined()
            expect(sessionStorage.token).toBeDefined()
        })

        //TODO FAILS



    })

    describe('retrieve user', () => {

        beforeEach(async () => {
            await User.create({ email, password, name, surname, age })
        })

        it('should succed on corrrect user data', async () => {
            await logic.loginUser(email, password)
            debugger
            const user = await logic.retrieveUser()
            debugger
            console.log(user)

            expect(user.name).toEqual(name)
            expect(user.surname).toEqual(surname)
            expect(user.email).toEqual(email)
            expect(user.password).toBeUndefined()
            expect(user.age).toEqual(age)
            expect(user.card).toEqual([])
            expect(user.orders).toEqual([])

        })

        //TODO FAILS


    })


    describe('retrieve products', () => {
        let category
        beforeEach(async () => {
            await Product.create({ title: 'Coffee', price: '1.5', category: 'drink', subCategory: 'Coffee', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Capuccino', price: '1.75', category: 'drink', subCategory: 'Coffee', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Water', price: '1', category: 'drink', subCategory: 'Water', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Cola', price: '1.25', category: 'drink', subCategory: 'Refreshing drinks', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Fanta', price: '1', category: 'drink', subCategory: 'Refreshing drinks', image: 'https://picsum.photos/200' })
            await User.create({ email, password, name, surname, age })
            category = 'drink'
        })

        it('should succed on corrrect products category', async () => {
            await logic.loginUser(email, password)

            const products = await logic.retrieveProducts(category)
            expect(products).toBeDefined()


            const _products = await Product.find({ category }).lean()
            expect(_products).toBeDefined()
            expect(products[0].title).toEqual(_products[0].title)
            expect(products[1].title).toEqual(_products[1].title)
            expect(products[2].title).toEqual(_products[2].title)
            expect(products[3].title).toEqual(_products[3].title)
            expect(products[4].title).toEqual(_products[4].title)

            expect(products[0].category).toEqual(_products[0].category)
            expect(products[1].category).toEqual(_products[1].category)
            expect(products[2].category).toEqual(_products[2].category)
            expect(products[3].category).toEqual(_products[3].category)
            expect(products[4].category).toEqual(_products[4].category)

            expect(products[0].price).toEqual(_products[0].price)
            expect(products[1].price).toEqual(_products[1].price)
            expect(products[2].price).toEqual(_products[2].price)
            expect(products[3].price).toEqual(_products[3].price)
            expect(products[4].price).toEqual(_products[4].price)

            expect(products[0].price).toEqual(_products[0].price)
            expect(products[1].price).toEqual(_products[1].price)
            expect(products[2].price).toEqual(_products[2].price)
            expect(products[3].price).toEqual(_products[3].price)
            expect(products[4].price).toEqual(_products[4].price)

            expect(products[0].subCategory).toEqual(_products[0].subCategory)
            expect(products[1].subCategory).toEqual(_products[1].subCategory)
            expect(products[2].subCategory).toEqual(_products[2].subCategory)
            expect(products[3].subCategory).toEqual(_products[3].subCategory)
            expect(products[4].subCategory).toEqual(_products[4].subCategory)

            expect(products[0].image).toEqual(_products[0].image)
            expect(products[1].image).toEqual(_products[1].image)
            expect(products[2].image).toEqual(_products[2].image)
            expect(products[3].image).toEqual(_products[3].image)
            expect(products[4].image).toEqual(_products[4].image)



        })

        //TODO FAILS


    })

    describe('card update', () => {
        let category
        beforeEach(async () => {
            await User.deleteMany()
            await Product.deleteMany()

            await Product.create({ title: 'Coffee', price: '1.5', category: 'drink', subCategory: 'Coffee', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Capuccino', price: '1.75', category: 'drink', subCategory: 'Coffee', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Water', price: '1', category: 'drink', subCategory: 'Water', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Cola', price: '1.25', category: 'drink', subCategory: 'Refreshing drinks', image: 'https://picsum.photos/200' })
            await Product.create({ title: 'Fanta', price: '1', category: 'drink', subCategory: 'Refreshing drinks', image: 'https://picsum.photos/200' })

            await User.create({ email, password, name, surname, age })
            category = 'drink'
        })

        it('should succed on corrrect card data', async () => {
            const { token } = await dataApi.authenticate(email, password)
            expect(token).toBeDefined()

            const products = await dataApi.retrieveProducts(category, token)
            expect(products).toBeDefined()

            const _products = await Product.find({ category }).lean()
            expect(_products).toBeDefined()
            expect(products[0]._id).toBeDefined()
            expect(products[1]._id).toBeDefined()
            expect(products[2]._id).toBeDefined()
            expect(products[3]._id).toBeDefined()
            expect(products[4]._id).toBeDefined()


            const id = products[0]._id
            await logic.loginUser(email, password)
            const response = await logic.cardUpdate(id)
            expect(response).toBeUndefined()

            const {card} = await User.findOne({ email }).select('card -_id').lean()
            expect(card[0].toJSON()).toBe(id)

            const user = await dataApi.retrieve(token)
            debugger
            expect(user.card).toBeDefined()
            debugger
            expect(user.card[0]._id).toEqual(id)

        })
        //TODO FAILS
    })






})