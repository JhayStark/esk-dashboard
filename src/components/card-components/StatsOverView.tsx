interface StatsOverviewProps {
  title: string;
  icon?: React.ReactNode;
  value: string | number;
}

const StatsOverview = ({ title, icon, value }: StatsOverviewProps) => {
  return (
    <div className='flex flex-col gap-8 p-4 bg-white rounded-lg 3xl:gap-10 shadow-sm'>
      <div className='flex items-center justify-between'>
        <p className='font-medium xl:text-base 3xl:text-xl'>{title}</p>
        <div className=' text-[#D27C2C] text-2xl 3xl:text-4xl'>{icon}</div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-xs font-light 2xl:text-sm '>Updated 30m ago</p>
        <p className='text-[#055189] xl:text-xl '>{value}</p>
      </div>
    </div>
  );
};

export default StatsOverview;
