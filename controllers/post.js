exports.getPosts=(res,req)=>{
    res.json({
        posts:[
            {title:'First post'},
            {title:"Second post"}
        ]
    })
}