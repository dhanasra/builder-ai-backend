const responser = require("../core/responser");
const depManager = require("../core/depManager");

async function create(req, res){
    const {name, status, templateId, resumeId} = req.body;
    try{

        const siteDoc = {
            name: name,
            link: '',
            status: status,
            templateId: templateId,
            resumeId: resumeId,
            created: Date.now(),
            updated: Date.now()
        }

        const site = await depManager.SITE.getSiteModel().create(siteDoc);
        return responser.success(res, site, "SITES_S001");
    }catch(error){
        console.log(error);
        return responser.success(res, error, "SITES_E001");
    }
}

module.exports = {
    create
}