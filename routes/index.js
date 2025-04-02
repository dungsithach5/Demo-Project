const categoriesRouter = require("./CategoriesRoute");
const orderitemRouter = require("./OrderItemRoute");
const ordersRouter = require("./OrdersRoute");
const productRouter = require("./ProductRoute");
const reviewRouter = require("./ReviewRoute");
const usersRouter = require("./UsersRoute");


export default (app) => {
    app.use("/api/categories", categoriesRouter);
    app.use("/api/orderitem", orderitemRouter);
    app.use("/api/orders", ordersRouter);
    app.use("/api/product", productRouter);
    app.use("/api/review", reviewRouter);
    app.use("/api/users", usersRouter);
}
