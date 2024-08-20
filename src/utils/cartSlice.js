import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
     
    name: "cart",
    initialState : {
        items:[],
    },
    
    reducers : {
        addItem: (state, action) => {
          state.items.push(action.payload);
        },

        removeItems : (action, state) => {
            state.items.pop();
        },

        clearCart : (action, state) => {
            state.items.length=0; // return { items : [] }
        }
    }

})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer;






// const cartSlice = createSlice({

//     name: "cart",
//     initialState: {
//         items: []
//     },

//     reducers: {
//         addItem: (state, action) => {
//             state.items.push(action.payload)
//         },

//         removeItem : (state) => {
//             state.items.pop()
//         },

//         clearCart : (state) => {
//             state.items.length =0
//         }
//     }
// })

// export const { addItem, removeItem, clearCart } = cartSlice.action;
// export default cartSlice.reducer;