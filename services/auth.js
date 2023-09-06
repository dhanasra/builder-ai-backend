const responser = require("../core/responser");
const depManager = require("../core/depManager");
const { generateTokens } = require("./token");

async function authenticate(req, res){
    const {uid, firstName, lastName, email, picture} = req.body;
    try{

        let user = await depManager.USER.getUserModel().findOne({uid: uid});
        let successCode = 'AUTH_S001';
        if(user==null){
            const userDoc = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                emailVerified: true,
                uid: uid,
                picture: picture,
                customPicture: picture!=null,
                lastLogin: Date.now(),
                created: Date.now(),
                updated: Date.now()
            };
            user = await depManager.USER.getUserModel().create(userDoc);
            successCode = 'AUTH_S002';
        }

        const { accessToken, refreshToken } = generateTokens(user._id);
        return responser.success(res, { user, accessToken, refreshToken }, successCode);
    }catch(error){
        console.log(error);
        return responser.success(res, error, "AUTH_E001");
    }
}

module.exports = {
    authenticate
}