import conexao from "../../database/connection.js";

export default{
    async Insert(req,res){
        let data=new Date();
        data.setDate(data.getDate()+15);
        const {objective,id_user,progress=0,validity=data,keys}=req.body;
        //keys=[{description,id_okr=null,id_user,status}...]
        //validity=new date()
        try {
             await conexao.transaction(async trx=>{
                const id_okr=await trx("okrs").insert({objective,id_user,progress,validity});
            
            if(!!keys){
                let keys_serial=keys.map(key=>({...key,id_okr:id_okr[0]}));
                await trx("keys").insert(keys_serial);

                return res.json({status:true,okr:{
                    objective,id:id_okr[0],id_user,progress,validity,keys:keys_serial
                }})
            }
             })
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro okr=>insert"})
        }
    },
    async update(req,res){
        let data=new Date();
        data.setDate(data.getDate()+15);
        const {id,objective,id_user,progress=0,validity=data,keys}=req.body;
        //keys=[{description,id_okr=obrigatorio,id_user,status}...]
        //validity=new date()
        try {
             await conexao.transaction(async trx=>{
                await trx("okrs").update({objective,id_user,progress,validity}).where({id});
            
            if(!!keys){
                let keys_serial=keys.map(key=>({...key,id_okr:id}));
                for (const iterator of keys_serial) {
                    const {description,id_okr,id_user,status}=iterator;
                    await trx("keys").update({description,id_okr,id_user,status}).where({id:iterator.id})
                }

                return res.json({status:true,okr:{
                    objective,id,id_user,progress,validity,keys:keys_serial
                }})
            }
             })
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro okr=>update"})
        }
    },
    async getOne(req,res){
        
        const {id}=req.query;
        
        try {
            if(!!id){
            const okr =await conexao('okrs').where({id}).first();
            let keys=await conexao("keys").where({id_okr:okr.id});
            
            for (const index in keys) {
                keys[index]={...keys[index],user:await conexao("users").where({id:keys[index].id_user}).select("users.name")};
            }
            return res.json({status:true,okr:{...okr,keys}})
           }else{

               return res.json({status:true,okrs:await conexao("okrs")})
           }
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro okr=>getOne"})
        }
    },
    async getTwu(req,res){
        
        const {id_user}=req.query;
        
        try {
            if(!!id_user){
            let okrs =await conexao('okrs').where({id_user});
            
            for (const index in okrs) {
                let keys= await conexao("keys").where({id_okr:okrs[index].id}).join("users","keys.id_user","=","users.id").select("keys.*","users.name");
                okrs[index]={...okrs[index],keys};
            }
            
            
            return res.json({status:true,okrs})
           }
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro okr=>getTwu"})
        }
    },
    async delete(req,res){
        const {id}=req.query;
        try {
            await conexao("okrs").del().where({id})
            return res.json({status:true,mensage:"apagado"})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"error okr=>delete"})
        }
    }
}