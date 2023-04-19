const userService = require("./userService");

module.exports = function(params) {

    var app = params.app;
    const fs = require("fs");
    const middleware = require("../../lib/auth/middleware");

    app.post("/createuser", middleware, async (req, res) => {
        try{

            // let response = await 
            const userQuery = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                created_at: new Date(),
                updated_at: new Date(),
            }

            let response = await userService.createUser(userQuery);
            Object.assign(userQuery, {_id: response.insertedId})
            res.status(201).json({success: true, message: userQuery})

        }catch(err) {
            res.status(400).json({success: true, message: err});
        }
    })

}