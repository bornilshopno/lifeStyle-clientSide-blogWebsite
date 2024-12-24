import { useLoaderData } from "react-router-dom";
import DataTable from 'react-data-table-component';
import theme from "./theme";



const Featured = () => {
    const allBlogs= useLoaderData()

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Author',
            selector: row => row.email,
        },
        {
            name:'Short Description',
            selector: row => row.shortDescription,
        }
    ];
    
    const data=[...allBlogs]
    


    return (
        <div>
           Featured 
           <div>
           <DataTable 
			columns={columns}
			data={data}
            title="Featured Blogs"
            theme={theme}
		/>
           </div>
        </div>
    );
};

export default Featured;