import authRouter from "../controllers/authController.js";

export default (app) => {
    app.use('/auth', authRouter);
};