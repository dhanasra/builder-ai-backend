const responser = require("../core/responser");
const depManager = require("../core/depManager");

async function create(req, res){
    const userId = req.userId;
    const {name, link, content, schema, parsed} = req.body;
    try{

        const resumeDoc = {
            userId: userId,
            name: name,
            link: link,
            parsed: parsed,
            content: content,
            schema: schema,
            created: Date.now(),
            updated: Date.now()
        }

        const resume = await depManager.RESUME.getResumeModel().create(resumeDoc);
        return responser.success(res, resume, "RESUME_S001");
    }catch(error){
        console.log(error);
        return responser.success(res, error, "RESUME_E001");
    }
}

async function update(req, res){
    const resumeId = req.query.id;
    const {name, link, content, schema} = req.body;
    try{

        let resume = await depManager.RESUME.getResumeModel().findById(resumeId);

        if(name!=null){
            resume.name = name;
        }
        if(link!=null){
            resume.link = link;
        }
        if(content!=null){
            resume.content = content;
        }
        if(schema!=null){
            resume.schema = schema;
        }

        await resume.save();
        
        return responser.success(res, resume, "RESUME_S004");
    }catch(error){
        console.log(error);
        return responser.success(res, error, "RESUME_E001");
    }
}

async function get(req, res){
    const resumeId = req.query.id;
    try{
        let resume = await depManager.RESUME.getResumeModel().findById(resumeId);
        return responser.success(res, resume, "RESUME_S002");
    }catch(error){
        console.log(error);
        return responser.success(res, error, "RESUME_E001");
    }
}

async function getAll(req, res){
    try{
        let resumes = await depManager.RESUME.getResumeModel().find();
        return responser.success(res, resumes, "RESUME_S002");
    }catch(error){
        console.log(error);
        return responser.success(res, error, "RESUME_E001");
    }
}

async function getByUser(req, res){
    const userId = req.query.id;
    try{
        let resumes = await depManager.RESUME.getResumeModel().findById({userId: userId});
        return responser.success(res, resumes, "RESUME_S002");
    }catch(error){
        console.log(error);
        return responser.success(res, error, "RESUME_E001");
    }
}

async function deleteResume(req, res){
    const resumeId = req.query.id;
    try{
        await depManager.RESUME.getResumeModel().deleteOne({_id: resumeId});
        return responser.success(res, true, "RESUME_S003");
    }catch(error){
        console.log(error);
        return responser.success(res, error, "RESUME_E001");
    }
}

module.exports = {
    create,
    get,
    getAll,
    getByUser,
    update,
    deleteResume
}