'use strict'

class Collection {
    constructor(model) {
         this.model = model;        
    }
    
    async create (obj){
        try {
              return await this.model.create(obj);
         } catch (error) {
            // console.log('object:>>',obj);
            // console.error('Error during creation');
        }
    }
}
 

module.exports = Collection;
