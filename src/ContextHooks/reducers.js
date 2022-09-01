export const initialData={
    basket:[]
}


  
export const reducer=(state,action)=>{
    console.log(action)

    switch(action.type){
        case "ADD_TO_BASKET":return{
            basket:[...state.basket,action.item]
        };

        case "REMOVE_BASKET":
            
        let newbasket=[...state.basket];

        const index=state.basket.findIndex((basketItem)=> basketItem.id===action.id);

        if(index >=0){
            newbasket.splice(index,1);
        }else{
            console.log("item is not presnet")
        }
        
        return{ ...state,

            basket:newbasket,
        };

         default:return state;
    }
}