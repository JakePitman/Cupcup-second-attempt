# cup cup

# create cup-example.json
# add/ use express to create api
```
 npm start 
```
- require express in index.js
```
app.use('/', (req,res) => {
    res.status(200).json(cup)
})

const cup = require(./cup-example.json)
app.listen(3000, () => {
    console.log('listening on port 3000')
})
```



# create a backend
- node
- mongo / mongoose

# front end
- CRUD form
- js