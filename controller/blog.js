const db = require("../src/db");
const {slug , fulldate} = require("../src/functions");
 
module.exports = {
    getBlogs: function (req, res) {

        var order = "DESC";
        if(req.query.order){
            order = req.query.order;
        }

        var limit = "";
        if(req.query.limit){
            limit = " LIMIT " + req.query.limit;
        }

        db.query("SELECT * FROM blogs ORDER BY id " + order + limit, (err, responsive) => {
            if (err) {
                res.json({ message: 'ERROR' });    
            }
            else{
                res.json({ message: 'OK', data: responsive });             
            }
        });

    },
    addBlog: function (req, res) {
        const values = req.body;
        if (values.title && values.content && values.description && values.categories && values.image && values.status){
        var data = {
            title: values.title,
            content: values.content,
            description: values.description,
            slug: slug(values.title),
            categories: values.categories,
            image: values.image,
            status: values.status,
            create_date: fulldate(),
            modified_date: fulldate()
        }
        db.query("INSERT INTO blogs SET ?", data, (err, responsive) => {
            if (err) {
                res.json({ message: 'Blog could not be added.' });    
            }
            else{
                res.json({ message: 'OK', id: responsive.insertId, data: data });             
            }
        });
    }
    else{
        res.json({ message: 'Missing data sent.' }); 
    }
    },
    getBlog: function (req, res) {
        const id = req.params.id;
        var order = "DESC";
        if(req.query.order){
            order = req.query.order;
        }

        var limit = "";
        if(req.query.limit){
            limit = " LIMIT " + req.query.limit;
        }

        db.query("SELECT * FROM blogs WHERE id = "+ id +" ORDER BY id " + order + limit, (err, responsive) => {
            if (err) {
                res.json({ message: 'ERROR' });   
                return; 
            }
            if (responsive.length) {
                res.json({ message: 'OK', data: responsive });   
                return; 
            }

            res.json({ message: 'Not found blog.' }); 
        });
    },
    updateBlog: function (req, res) {
        const id = req.params.id;
        const values = req.body;
        if (values.title && values.content && values.description && values.categories && values.image && values.status){
        db.query(
            "UPDATE blogs SET title = ?, content = ?, description = ?, slug = ?, categories = ?, image = ?, status = ?, modified_date = ? WHERE id = ?",
            [values.title, values.content, values.description, slug(values.title), values.categories, values.image, values.status, fulldate(), id],
            (err, responsive) => {

            if (err) {
                res.json({ message: 'Error updating blog.' }); 
                return;   
            }
            
            if (responsive.affectedRows == 0) {
                res.json({ message: 'Not found blog.' }); 
                return;
            }

            res.json({ message: 'OK', id: id });

        });
    }
    else{
        res.json({ message: 'Missing data sent.' }); 
    }
    },
    deleteBlog: function (req, res) {
        const id = req.params.id;
        db.query("DELETE FROM blogs WHERE id = "+ id, (err, responsive) => {
            if (err) {
                res.json({ message: 'Error delete blog.' }); 
                return;   
            }
            
            if (responsive.affectedRows == 0) {
                res.json({ message: 'Not found blog.' }); 
                return;
            }

            res.json({ message: 'OK' });
        });
    }
  };