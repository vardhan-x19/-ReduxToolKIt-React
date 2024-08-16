import { configureStore, createSlice } from '@reduxjs/toolkit';

const privacySlice=createSlice({
    name:'privacy',
    initialState:{val:false},
    reducers :{
        toggle: (state)=>{
            state.val=!state.val;
        }
    }
})

const CounterSlice = createSlice({
  name: 'counter',
  initialState: { countVal: 0 },
  reducers: {
    increment: (state) => {
      state.countVal += 1; // Increment the count value
    },
    decrement: (state) => {
      state.countVal -= 1; // Decrement the count value
    },
    add: (state, action) => {
      state.countVal += Number(action.payload); // Add payload value to countVal
    },
    sub: (state, action) => {
      state.countVal -= Number(action.payload); // Subtract payload value from countVal
    }
  }
});

const ControlStore = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    privacy :privacySlice.reducer
  }
});

// Export the actions and the reducer
export const { increment, decrement, add, sub } = CounterSlice.actions;
export const {toggle} =privacySlice.actions;
export default ControlStore;


//working of ReduxTOOlkit 
//it is used for maintain the store clean and managable
//steps to Use of ReduxTolkit
//first intsall install@reduxToolkit
//create a configurestire and imoort from the reduxe toolkit
//then in the configure stire it takes the group of reducers functions as the objects
//we see that we can acess the slice of the store with the use of use Sellector but here we can crete slices with CreateSlice()
//create the slice and create reduces in the slice 
//createslice() allows to create name:"",initilastate:,reducers:{ smalleducer:()=>{}};
//we can import the reduucer action from the slices
//after export we acess the elemenst as the same process of previous one Using of UseSelelctor();
//dispatch the action use using const name=useDispatch();
//import the the reduce methods from the exported ones
//dispatch(action.reducer)
