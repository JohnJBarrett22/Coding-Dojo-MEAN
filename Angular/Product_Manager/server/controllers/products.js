var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = {
    index: function(req, res){
        console.log("~Controller: index() initialized~");
        Product.find({}, function(err, products){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(products);
            }
        })
    },

    show: function(req, res){
        console.log("~Controller: show() initialized~");
        let id = req.params.id;
        Product.findOne({_id: id},function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(product);
            }
        })
    },

    addProduct: function(req, res){
        console.log("~Controller: addProduct() initialized~");
        Product.create({title: req.body.title, price: req.body.price, image: req.body.image}, function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", added: true});
            }
        })
    },

    editProduct: function(req, res){
        console.log("~Controller: editProduct() initialized~");
        let id = req.params.id;
        Product.findById(id, function(err, product){
            console.log("~Controller: editProduct() - findById initialized~");
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.title){
                    product.title = req.body.title; 
                }
                if(req.body.price){
                    product.price = req.body.price;
                }
                if(req.body.image){
                    product.image = req.body.image;
                }
            }
            product.save(function(err){
                console.log("~Controller: editProduct() - save initialized~");
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", product: product})
                }
            })
        })
    },

    deleteProduct: function(req, res){
        console.log("~Controller: deleteProduct() initialized~");
        let id = req.params.id;
        Product.remove({_id: id},function(err){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", removed: true});
            }
        })
    }    
}