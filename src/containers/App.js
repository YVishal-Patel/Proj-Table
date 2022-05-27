import Chart from '../components/Chart';
import Table from '../components/Table';
export default () => {
   return (
       <div className="wrapper">
      
         <div className="chart">
            <Chart />
        </div>
        <div className="tableContainer">
            <Table />
        </div>
       
       </div>
   );
}