export const deleteAccount = (id: number, name: string) => {
    const accounts: { id: number, name: string, currency: string, balance: number}[] = [
        {id:1, name:'James Doe', currency:'$', balance:500},
        {id:2, name:'Fifi', currency:'€', balance:100000},
        {id:3, name:'Coralie', currency:'$', balance:100000},
        {id:4, name:'Dona', currency:'£', balance:100000},
    
    ]
    // let accounts = [
    //     {id:1, name:'James Doe', currency:'$', balance:500},
    //     {id:2, name:'Fifi', currency:'€', balance:100000},
    //     {id:3, name:'Coralie', currency:'$', balance:100000},
    //     {id:4, name:'Dona', currency:'£', balance:100000},
    
    // ]
    let AccountToDelete = {id:id, name:name}
    
    const indexOfObject = accounts.findIndex((object) => {
        let deleteId = object.id  === AccountToDelete.id
        return deleteId
       
    });
      
    //   console.log(indexOfObject); // 👉️ 1
      
      if (indexOfObject !== -1) {
        accounts.splice(indexOfObject,1);
        return "your account is deleted"
      }
      
       

    
}