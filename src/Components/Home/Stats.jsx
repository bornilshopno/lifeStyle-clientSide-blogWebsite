

const Stats = () => {
    return (
<div className="flex justify-center border-1 border-[#6a609f]">
<div className="stats shadow">
  <div className="stat place-items-center">
    <div className="stat-title">Visitors</div>
    <div className="stat-value text-xl lg:text-4xl">11K</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-[#6A609] text-xl lg:text-4xl">200</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Interaction</div>
    <div className="stat-value text-xl lg:text-4xl">1,800</div>
  </div>
</div>
</div>
    );
};

export default Stats;