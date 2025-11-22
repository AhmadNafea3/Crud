exports.getAllOrderProduct = async (req, res) => {
  try {
    const result = await database.pool.query(`
    SELECT * FROM orders_products;
    `);

    return res.status(200).json(result.rows);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
exports.createOrders_product =async (req,res) =>{
    try{
        
const result =await database.pool.query({
    text:`
    INSERT INTO orders_products (id,product_id,order_id)
    VALUES ($1,$2,$3) 
    RETURNING *`,
    values:[req.body.id,
        req.body.product_id,
        req.body.order_id

    ]
    
})
    return res.status(201).json(result.rows[0])
    }catch(error){
 res.status(500).json({ error: error.message });

    }
}

exports.updateOrder_product = async(req,res)=>{
try{
const result =await database.pool.query({
text:`UPDATE orders_products SET product_id=$2,order_id=$3
WHERE id=$1
RETURNING *`,
values:[req.params.id,
    req.body.product_id,
req.body.order_id]

})
if(result.rowCount ==0){
    return res.status(404).json({error:'order not found'})
}
return res.status(200).json(result.rows[0])
}catch(error){ 
     return res.status(500).json({ error: error.message });

}
}
exports.deleteOrder_product =async (req,res) =>{
    try{
const result = await database.pool.query({
    text:`DELETE FROM orders_products WHERE id=$1`,
    values:[req.params.id]
})
if(result.rowCount ==0){
    return res.status(404).json({error: 'order not found'})
}

return res.status(204).send()

    }catch(error){
         return res.status(500).json({ error: error.message });


    }
}