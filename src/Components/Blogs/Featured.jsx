import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import theme from "./theme";
import useAuth from "../../SharedCompoents/useAuth";
import { Helmet } from "react-helmet-async";



const Featured = () => {

    const { featuredBlog } = useAuth()

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
            name: 'Short Description',
            selector: row => row.shortDescription,
        },
        {
            name: "Click to View",
            cell: row => (
                <Link to={`/blog/${row._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                    View Blog
                </Link>


            ),
        }
    ];





    return (
        <div className="bg-gradient-to-t from-gray-800 to-[#1D3160]">
            <Helmet>
                <title>LifeStyle Circuit || Featured Blogs</title>
            </Helmet>

            <div className="lg:w-11/12 mx-auto">
                <DataTable
                    columns={columns}
                    data={featuredBlog}
                    title="Featured Top10 Blogs :"
                    theme={theme}
                    customStyles={{
                        header: {
                            style: {
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Featured;