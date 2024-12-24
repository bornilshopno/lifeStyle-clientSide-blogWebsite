

const WishTable = ({wish}) => {
    const{ blogId, wishOf,_id, category,  title, shortDescription,  email, name, thumbnail }= wish
    console.log(wish)
    return (
        <>
         {/* <div className="overflow-x-auto">
  <table className="table">
    head
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody> */}
      {/* row 1 */}
    
      
    {/*   
    </tbody>
    foot 
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div> */}

</>
    
    );
};

export default WishTable;