const { Router } = require('express');
const User = require('../models/User');
const router = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ]
    ,
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации '
                })
            }
            const { email, password } = req.body
            const candindant = await User.findOne({ email })
            if (candindant) {
                res.status(400).json({ message: 'Такой пользователь уже найден' })
            }
            const heshedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: heshedPassword })
            await user.save()

            res.status(201).json({ message: 'Пользователь создан!' })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так попробуйте снова!' })
        }

    })
   
// /api/auth/login
router.post(
    '/login',
    [
      check('email', 'Введите корректный email!').normalizeEmail().isEmail(),
      check('password', 'Введите корректный пароль!').exists()
    ],
    async (req, res) => {
        try {
          
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему'
                })
            }
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message: 'Такого пользователя не существует'})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(400).json({message: 'Неверный пароль попробуйде снова!'})
            }
            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}

            )
            res.json({token, userId: user.id})
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так попробуйте снова!' })
        }

    })

module.exports = router;