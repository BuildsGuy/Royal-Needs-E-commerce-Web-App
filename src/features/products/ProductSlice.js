import Products from "../../productsContent";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: Products,
    filteredItems: Products,
    searchTerm: "",
    selectedCategory: "All",
};

// Pure helper function to handle complex multi-criteria filtering safely
const filterProducts = (items, searchTerm, selectedCategory) => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    return items.filter((product) => {
        // Fallback checks to prevent errors if strings are missing or undefined
        const title = product.title ? product.title.toLowerCase() : "";
        const category = product.category ? product.category : "";

        // Core filter condition 1: Match the user search input
        const matchSearch = title.includes(normalizedSearch);
        
        // Core filter condition 2: Match the user category selection
        // Gracefully standardizes spelling variations between "Tumeric" and "Turmeric"
        const matchCategory = 
            selectedCategory === "All" || 
            category === selectedCategory ||
            (selectedCategory === "Tumeric Soap" && category === "Turmeric Soap") ||
            (selectedCategory === "Turmeric Soap" && category === "Tumeric Soap");

        return matchSearch && matchCategory;
    });
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            // Pass individual raw state variables to keep updates predictable and highly performant
            state.filteredItems = filterProducts(state.items, state.searchTerm, state.selectedCategory);  
        },

        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            // Automatically recalibrate the list whenever a user shifts categories
            state.filteredItems = filterProducts(state.items, state.searchTerm, state.selectedCategory);  
        }
    },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;