// import React from 'react';

// type SearchBarProps = {
//   filterText: string;
//   inStockOnly: boolean;
//   onFilterTextChange: any;
//   onInStockOnlyChange: any;
// };

// export default function SearchBar(props: SearchBarProps) {
//     return (
//       <form>
//         <input 
//           type="text" 
//           value={props.filterText} placeholder="Search..." 
//           onChange={(e) => props.onFilterTextChange(e.target.value)} />
//         <label>
//           <input 
//             type="checkbox" 
//             checked={props.inStockOnly} 
//             onChange={(e) => props.onInStockOnlyChange(e.target.checked)} />
//           {' '}
//           Only show products in stock
//         </label>
//       </form>
//     );
//   }