import { Search } from "lucide-react";
import Form from "next/form";
// import SearchFormReset from "./SearchFormReset";


function SearchForm( { query } : { query? : string }) {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        type="search"
        name="query"
        placeholder="Search Startups"
        className="search-input"
        defaultValue={query}
      />
      <div className="flex gap-2">
        {/* {query && <SearchFormReset />} */}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5"/>
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;





// interface SearchFormProps {
//     query?: string;
//   }
  
//   const SearchForm: React.FC<SearchFormProps> = ({ query }) => {
//     return (
//       <form action="/" className="search-form">
//         <input
//           type="search"
//           name="query"
//           placeholder="Search Startups"
//           className="search-input"
//           defaultValue={query}
//         />
//         <div className="flex gap-2">
//           {/* {query && <SearchFormReset />} */}
//           <button type="submit" className="search-btn text-white">
//             S
//           </button>
//         </div>
//       </form>
//     );
//   };
  
//   export default SearchForm;
  
